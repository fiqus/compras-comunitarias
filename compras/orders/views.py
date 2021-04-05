import itertools
from collections import defaultdict
from typing import Any, Dict

from django.contrib.auth.mixins import LoginRequiredMixin
from django.forms.models import BaseModelForm, ModelForm, inlineformset_factory
from django.http.response import HttpResponse
from django.shortcuts import render
from django.views.generic import CreateView
from .models import Listing, Order, OrderProduct, Producer, Category
from django.views.generic import DetailView
import itertools

from compras.business.business import Business


class TemplateCounter(itertools.count):
    def next(self):
        return next(self)


class OrderForm(ModelForm):
    class Meta:
        model = Order
        fields = ['listing']


def create_order(request):
    listing = Business().available_listings()
    if (not listing):
        return render(request, 'orders/no_listing.html')
    listing = listing.latest('limit_date')
    
    order = Order.objects.filter(user=request.user, listing=listing).last()
    OrderProductInlineFormset = inlineformset_factory(Order, OrderProduct, fields=('product', 'amount'),
                                                      can_delete=False, extra=listing.products.count())
    if request.method == "POST":
        form = OrderForm(request.POST, request.FILES, initial={'listing': listing}, instance=order)
        formset = OrderProductInlineFormset(request.POST, request.FILES, instance=form.instance)
        if form.is_valid() and formset.is_valid():
            form.instance.user = request.user
            form.instance.listing = listing
            form.instance.orderproduct_set.all().delete()
            form.save()
            formset.save()
            order = Order.objects.get(pk=form.instance.pk)
            return render(request, 'orders/order_success.html', {'order': order})
    else:
        form = OrderForm()
        formset = OrderProductInlineFormset(instance=form.instance)
    amounts = defaultdict(int)
    if order:
        for p in order.orderproduct_set.all():
            amounts[p.product.id] = p.amount
    return render(request, 'orders/order_form.html', {'form': form, 'formset': formset, 'listing': listing,
                                                      'amounts': amounts, 'order': order,
                                                      'iterator': TemplateCounter()})
    return {listing}


class View_producer(DetailView):
    model = Producer

    def get(self, request, *args, **kwargs):
        self.object = self.get_object()
        context = self.get_context_data(object=self.object)
        try:
            listing = Listing.objects.get(enabled=True)
        except Listing.DoesNotExist:
            return render(request, 'orders/no_listing.html')

        context["products"] = listing.listingproduct_set.filter(product__producer=self.object.id).all()
       # print(context["products"].name)
        return self.render_to_response(context)
