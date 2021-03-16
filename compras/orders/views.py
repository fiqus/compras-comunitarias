import itertools
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
    listing = Listing.objects.get(enabled=True)
    OrderProductInlineFormset = inlineformset_factory(Order, OrderProduct, fields=('product', 'amount'),
                                                      can_delete=False, extra=listing.listingproduct_set.count())
    if request.method == "POST":
        form = OrderForm(request.POST, request.FILES, initial={'listing': listing})
        formset = OrderProductInlineFormset(request.POST, request.FILES, instance=form.instance)
        if form.is_valid and formset.is_valid():
            form.instance.user = request.user
            form.instance.listing = listing
            form.save()
            formset.save()
            return render(request, 'orders/order_success.html', {'order': form.instance})
    else:
        form = OrderForm()
        formset = OrderProductInlineFormset(instance=form.instance,
                                            initial=[{'product': lp.id, 'amount': 0} for lp in
                                                     listing.listingproduct_set.all()])
    return render(request, 'orders/order_form.html', {'form': form, 'formset': formset, 'listing': listing,
                                                      'iterator': TemplateCounter()})
