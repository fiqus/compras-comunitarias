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

    def get_initial(self):
        listing = get_object_or_404(Listing, enabled=True)
        return {'listing': listing, 'user': self.request.user}

    def form_valid(self, form):
        form.instance.user = self.request.user
        return super().form_valid(form)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        listing = get_object_or_404(Listing, enabled=True)
        context['listing'] = listing
        return context


order_create_view = OrderCreateView.as_view()
