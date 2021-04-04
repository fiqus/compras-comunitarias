from django.contrib import admin
from django.utils.html import format_html
from django.conf.urls import url
from compras.orders.models import Listing, Order, Product, ListingProduct, Producer, OrderProduct, Tag
from .forms import ListingSummaryForm, ListingRealTimeForm

from django.urls import reverse

from django.template.response import TemplateResponse
from django.core.serializers.json import DjangoJSONEncoder
import json


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
            ),
            url(
                r'^(?P<listing_id>.+)/realtime/$',
                self.admin_site.admin_view(self.real_time),
                name='listing-realtime',
            ),
            url(
                r'^(?P<listing_id>.+)/report-orders/$',
                self.admin_site.admin_view(self.report_orders),
                name='report-orders',
            ),
        ]
        return custom_urls + urls

    def listing_actions(self, obj):
        return format_html(
            '<a class="button" href="{}">Detalle de Pedido</a>&nbsp;'
            '<a class="button" href="{}">Entregas en tiempo real</a>&nbsp;'
            '<a class="button" href="{}">Informar Pedidos</a>',
            reverse('admin:listing-summary', args=[obj.pk]),
            reverse('admin:listing-realtime', args=[obj.pk]),
            reverse('admin:report-orders', args=[obj.pk])
        )

    listing_actions.short_description = 'Acciones'
    listing_actions.allow_tags = True

    def get_summary(self, request, listing_id, *args, **kwargs):
        listing = self.get_object(request, listing_id)
        summary = listing.summary.to_html(classes=["table-bordered", "table-striped", "table-hover"])
        products = listing.products_list
        data = {
            summary,
            products
        }
        return self.process_action(
            request=request,
            listing_id=listing_id,
            action_form=ListingSummaryForm,
            template='admin/order/listing_summary.html',
            action_title='Resumen de Pedido',
            data=data
        )

    def real_time(self, request, listing_id, *args, **kwargs):
        listing = self.get_object(request, listing_id)
        print(dir(listing))
        data = {
            "products_by_order": json.dumps(listing.products_by_order, cls=DjangoJSONEncoder)
        }
        return self.process_action(
            request=request,
            listing_id=listing_id,
            action_form=ListingRealTimeForm,
            template='admin/order/vue_app/listing_realtime.html',
            action_title='Entrega de pedidos en tiempo real',
            data=data
        )

    def report_orders(self, request, listing_id, *args, **kwargs):
        return self.process_action(
            request=request,
            listing_id=listing_id,
            action_form=ListingRealTimeForm,
            template='admin/order/report_orders.html',
            action_title='Informar Pedidos',
        )

    def process_action(
        self,
        request,
        listing_id,
        action_form,
        template,
        action_title,
        data
    ):
        if request.method != 'POST':
            form = action_form()

        context = self.admin_site.each_context(request)
        context['opts'] = self.model._meta
        context['form'] = form
        context["data"] = data
        context['title'] = action_title
        return TemplateResponse(
            request,
            template,
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
admin.site.site_header = "Compras Comunitarias - Administración"
admin.site.site_title = "Compras Comunitarias"
admin.site.index_title = "Panel de Gestión"
