from django.contrib import admin
from compras.orders.models import Listing, Order, Product, ListingProduct, Producer

admin.site.register(Order)

class ProductAdmin(admin.TabularInline):
    model = ListingProduct

class ListingAdmin(admin.ModelAdmin):
    inlines = [ProductAdmin]

admin.site.register(Listing, ListingAdmin)

admin.site.register(Product)
admin.site.register(Producer)
