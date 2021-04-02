from django.contrib import admin
from compras.orders.models import Listing, Order, Product, ListingProduct, Producer, OrderProduct, Tag


class ProductAdmin(admin.TabularInline):
    model = ListingProduct


class ListingAdmin(admin.ModelAdmin):
    inlines = [ProductAdmin]


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

#Cambiando nombre del admin
admin.site.site_header = "Compras Comunitarias - Administracion"
admin.site.site_title = "Compras Comunitarias"
admin.site.index_title = "Panel de gestion"
