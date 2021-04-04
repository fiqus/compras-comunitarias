from compras.orders.models import Listing
from datetime import datetime

class Business:

    def available_listings(self):
        listings = Listing.objects.filter(limit_date__gte=datetime.now(), enabled=True)
        return listings

    def first_available_listing(self):
        return self.available_listings().first()
        
    def update_stock_products(self, order):
        listing = order.listing
        for order_product in order.orderproduct_set.all():
            listing_product = order_product.product
            if (listing_product.stock == None): # El producto tiene stock ilimitado
                continue
            listing_product.stock -= order_product.amount
            listing_product.save()

