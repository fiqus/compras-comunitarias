from compras.orders.models import Listing
from datetime import datetime

class Business:

    def available_listings(self):
        listings = Listing.objects.filter(limit_date__gte=datetime.now(), enabled=True)
        if listings:
            listings = listings.latest('limit_date')
        return listings
        
