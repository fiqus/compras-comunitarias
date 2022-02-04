from compras.utils.emails.email_types import ConfirmPurchaseEmailType
from compras.utils.emails.email_sender import EmailSender
from django.contrib import admin
from django.contrib.sites.models import Site
from django.utils.html import format_html
from django.conf.urls import url
from compras.orders.models import Listing, Order, Product, ListingProduct, Producer, OrderProduct, Tag, Category
from .forms import ListingSummaryForm, ListingRealTimeForm
from django.http import JsonResponse
from django.contrib.auth.models import Group
from allauth.socialaccount.models import SocialApp, SocialAccount, SocialToken
from allauth.account.models import EmailAddress

from django.urls import reverse

from django.template.response import TemplateResponse
from django.core.serializers.json import DjangoJSONEncoder
import json
from django.views.decorators.csrf import csrf_protect
from django.utils.decorators import method_decorator

csrf_protected_method = method_decorator(csrf_protect)


class ProductAdmin(admin.TabularInline):
    model = ListingProduct


class ListingAdmin(admin.ModelAdmin):
    inlines = [ProductAdmin]
    list_display = (
        'name',
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
                r'^(?P<listing_id>.+)/realtime/change_status/',
                self.change_order_status,
            ),
            url(
                r'^(?P<listing_id>.+)/report-orders/$',
                self.admin_site.admin_view(self.report_orders),
                name='report-orders',
            ),
            url(
                r'^(?P<listing_id>.+)/report-orders/send-emails',
                self.send_emails,
            ),
        ]
        return custom_urls + urls

    def listing_actions(self, obj):
        url_real_time = f"http://localhost:3000/"
        return format_html(
            '<a class="button" href="{}">Detalle de Pedido</a>&nbsp;'
            '<a class="button" href="http://localhost:3000/" target=”_blank”>Entregas en tiempo real</a>&nbsp;'
            '<a class="button" href="{}">Informar Pedidos</a>',
            reverse('admin:listing-summary', args=[obj.pk]),
            # reverse('admin:listing-realtime', args=[obj.pk]),
            reverse('admin:report-orders', args=[obj.pk])
        )

    listing_actions.short_description = 'Acciones'
    listing_actions.allow_tags = True

    def get_summary(self, request, listing_id, *args, **kwargs):
        listing = self.get_object(request, listing_id)
        summary = listing.summary.to_html(classes=["table-bordered", "table-striped", "table-hover"])
        products = listing.products_list
        data = {
            "summary": summary,
            "products": products
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
            "products_by_order": json.dumps(listing.products_by_order, cls=DjangoJSONEncoder),
            "listing": listing
        }
        print(data)
        print(str(request))
        return self.process_action(
            request=request,
            listing_id=listing_id,
            action_form=ListingRealTimeForm,
            template='admin/order/vue_app/listing_realtime.html',
            action_title='Entrega de pedidos en tiempo real',
            data=data
        )

    def report_orders(self, request, listing_id, *args, **kwargs):
        listing = self.get_object(request, listing_id)
        data = {
            "orders": listing.orders
        }
        return self.process_action(
            request=request,
            listing_id=listing_id,
            action_form=ListingRealTimeForm,
            template='admin/order/report_orders.html',
            action_title='Informar Pedidos',
            data=data
        )

    def send_emails(self, request, listing_id):
        listing = self.get_object(request, listing_id)
        orders = listing.orders
        for order in orders:
            if order['notification_status'] == Order.NOT_NOTIFIED:
                order_data = Order.objects.get(pk=order['id'])

                from_email = "test@test.com"
                to_email = order['user']['email']
                email_data = {
                    'user_name': order['user']['name'],
                    'listing_name': listing.name,
                    'limit_date': listing.limit_date,
                    'order_products': order_data.get_products(),
                    'order_total': order_data.total,
                    'support_email': EmailSender.SUPPORT_EMAIL
                }

                email_sender = EmailSender(ConfirmPurchaseEmailType(), from_email, to_email, email_data)
                email_sender.send_email()

                # change status of the order
                order_data.notification_status = "notified"
                order_data.save()
        return JsonResponse({})

    @csrf_protected_method
    def change_order_status(self, request, listing_id):
        body = json.loads(request.body)
        order = Order.objects.get(pk=body["order_id"])
        order.status = body["status"]
        order.save()
        return JsonResponse({"status": order.status})

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


class TagAdmin(admin.TabularInline):
    model = Tag


admin.site.register(Order, OrderAdmin)
admin.site.register(Listing, ListingAdmin)
admin.site.register(Product)
admin.site.register(Producer)
admin.site.register(Tag)
admin.site.register(Category)
admin.site.unregister(Group)
admin.site.unregister(Site)
admin.site.unregister(SocialApp)
admin.site.unregister(SocialAccount)
admin.site.unregister(SocialToken)
admin.site.unregister(EmailAddress)

# Cambiando nombre del admin
admin.site.site_header = "Compras Comunitarias - Administración"
admin.site.site_title = "Compras Comunitarias"
admin.site.index_title = "Panel de Gestión"
