from django.contrib import admin
from django.utils.html import format_html
from django.conf.urls import url
from compras.orders.models import Listing, Order, Product, ListingProduct, Producer, OrderProduct, Tag
from .forms import ListingSummaryForm
from django.urls import reverse

from django.template.response import TemplateResponse


class ProductAdmin(admin.TabularInline):
    model = ListingProduct


class ListingAdmin(admin.ModelAdmin):
    inlines = [ProductAdmin]
    list_display = (
        'limit_date',
        'listing_actions', 
    )

    def get_urls(self):
        urls = super().get_urls()
        custom_urls = [
            url(
                r'^(?P<listing_id>.+)/summary/$',
                self.admin_site.admin_view(self.get_summary),
                name='listing-summary',
            )
        ]
        return custom_urls + urls

    def listing_actions(self, obj):
        return format_html(
            '<a class="button" href="{}">Resumen</a>&nbsp;',
            reverse('admin:listing-summary', args=[obj.pk])
        )

    listing_actions.short_description = 'Acciones'
    listing_actions.allow_tags = True

    def get_summary(self, request, listing_id, *args, **kwargs):
        return self.process_action(
            request=request,
            listing_id=listing_id,
            action_form=ListingSummaryForm,
            action_title='Resumen de Pedido',
        )

    def process_action(
        self,
        request,
        listing_id,
        action_form,
        action_title
    ):
        listing = self.get_object(request, listing_id)
        if request.method != 'POST':
            form = action_form()

        context = self.admin_site.each_context(request)
        context['opts'] = self.model._meta
        context['form'] = form
        context['listing'] = listing

        context['summary'] = listing.summary.to_html()
        context['title'] = action_title
        return TemplateResponse(
            request,
            'admin/order/listing_action.html',
            context,
        )

class OrderProductAdmin(admin.TabularInline):
    model = OrderProduct


class OrderAdmin(admin.ModelAdmin):
    inlines = [OrderProductAdmin]


class TagAdmin (admin.TabularInline):
    model= Tag


admin.site.register(Order, OrderAdmin)
admin.site.register(Listing, ListingAdmin)
admin.site.register(Product)
admin.site.register(Producer)
admin.site.register(Tag)

# Cambiando nombre del admin
admin.site.site_header = "Compras Comunitarias - Administracion"
admin.site.site_title = "Compras Comunitarias"
admin.site.index_title = "Panel de gestion"
