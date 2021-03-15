from django.contrib.auth.mixins import LoginRequiredMixin
from django.forms import ModelForm
from django.shortcuts import get_object_or_404
from django.views.generic import CreateView

from .models import Listing, Order


class OrderCreateForm(ModelForm):
    class Meta:
        model = Order
        fields = ['user', 'listing', 'products']

class OrderCreateView(LoginRequiredMixin, CreateView):
    template_name = 'orders/order_form.html'
    form_class = OrderCreateForm

    def form_valid(self, form):
        form.instance.user = self.request.user
        return super().form_valid(form)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        listing = None
        try:
            listing = Listing.objects.get(enabled=True)
        except Listing.DoesNotExist:
            pass
        context['listing'] = listing
        return context


order_create_view = OrderCreateView.as_view()
