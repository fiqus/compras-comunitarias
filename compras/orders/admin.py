from django.contrib import admin
from compras.orders.models import Listing, Order, Product, ListingProduct, Producer, OrderProduct


class ProductAdmin(admin.TabularInline):
    model = ListingProduct


class ListingAdmin(admin.ModelAdmin):
    inlines = [ProductAdmin]


class OrderProductAdmin(admin.TabularInline):
    model = OrderProduct


class OrderAdmin(admin.ModelAdmin):
    inlines = [OrderProductAdmin]


admin.site.register(Order, OrderAdmin)
admin.site.register(Listing, ListingAdmin)
admin.site.register(Product)
admin.site.register(Producer)
