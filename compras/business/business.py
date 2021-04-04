from compras.orders.models import Listing
from datetime import datetime

class Business:

    def available_listings(self):
        listings = Listing.objects.filter(limit_date__gte=datetime.now(), enabled=True)
        return listings

    def first_available_listing(self):
        return self.available_listings().first()
        
