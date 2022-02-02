import itertools
from collections import defaultdict

from django.contrib.auth.mixins import LoginRequiredMixin
from django.forms.models import  ModelForm, inlineformset_factory
from django.http.response import HttpResponse
from django.shortcuts import render, get_object_or_404
from django.views.generic import TemplateView
from .models import Listing, Order, OrderProduct, Producer
from django.views.generic import DetailView
import itertools
from django.contrib.auth import get_user_model

from compras.business.business import Business

import json

from django.core.serializers.json import DjangoJSONEncoder

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import authentication, permissions

class TemplateCounter(itertools.count):
    def next(self):
        return next(self)


class OrderForm(ModelForm):
    class Meta:
        model = Order
        fields = ['listing']


class ListingOrders(APIView):
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAdminUser]

    def get(self, request, listing_id):
        listing = Listing.objects.get(pk=listing_id);
        return Response(listing.orders)


def create_order(request, pk):
    
    listing = Business().available_listings()
    if (not listing):
        return render(request, 'orders/no_listing.html')
    listing = get_object_or_404(Listing, pk=pk, enabled=True)
    
    order = Order.objects.filter(user=request.user, listing=listing).last()
    products =listing.listingproduct_set.all()
    categories = {}
    if listing:
        for p in products:
            category = str(p.product.category)
            if category not in categories:
                categories[category] = []
            
            categories[category].append(p)
    

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
            return render(request, 'orders/order_success.html', {'order': order, 'categories':categories})
    
    else:
        form = OrderForm()
        formset = OrderProductInlineFormset(instance=form.instance)
    amounts = defaultdict(int)
    if order:
        
        for p in order.orderproduct_set.all():
            amounts[p.product.id] = p.amount

    return render(request, 'orders/order_form.html', {'form': form, 'formset': formset, 'listing': listing,
                                                      'amounts': amounts, 'order': order, 'categories':categories,
                                                      'iterator': TemplateCounter()})
    return {listing}

class View_producer(DetailView):
    model = Producer

    def get(self, request, *args, **kwargs):
        self.object = self.get_object()
        context = self.get_context_data(object=self.object)
        listings = Listing.objects.filter(enabled=True)
        products = []
        for listing in listings:
            products += listing.listingproduct_set.filter(product__producer=self.object.id).all()

        

        context["products"] = products
        return self.render_to_response(context)



User = get_user_model()   
class UserDetailView(LoginRequiredMixin, TemplateView):
    def get(self, request):
        listings = Listing.objects.filter(enabled=True)
        orders = []
        for listing in listings:
            order = Order.objects.filter(user=request.user, listing=listing)
            orders += order
       
        return render(request, 'users/user_detail.html', {'orders': orders, 'object': request.user})
       
user_detail_view = UserDetailView.as_view()
    
class Select_listing(LoginRequiredMixin, TemplateView):
    def get(self, request):
        listings = Listing.objects.filter(enabled=True)
        
        return render(request, 'orders/select_listing.html', {'listings':listings, 'object': request.user})
     
