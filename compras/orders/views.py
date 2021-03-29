import itertools
from collections import defaultdict
from typing import Any, Dict

from django.contrib.auth.mixins import LoginRequiredMixin
from django.forms.models import BaseModelForm, ModelForm, inlineformset_factory
from django.http.response import HttpResponse
from django.shortcuts import render
from django.views.generic import CreateView
from .models import Listing, Order, OrderProduct

import itertools


class TemplateCounter(itertools.count):
    def next(self):
        return next(self)


class OrderForm(ModelForm):
    class Meta:
        model = Order
        fields = ['listing']


def create_order(request):
    try:
        listing = Listing.objects.get(enabled=True)
    except Listing.DoesNotExist:
        return render(request, 'orders/no_listing.html')

    order = Order.objects.filter(user=request.user, listing=listing).last()
    OrderProductInlineFormset = inlineformset_factory(Order, OrderProduct, fields=('product', 'amount'),
                                                      can_delete=False, extra=listing.listingproduct_set.count())
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

def view_producer(request):
    return render(request, "producers/producer_listing.html")