from compras.orders.models import Listing
from datetime import date

class Business:

    def available_listings(self):
        today = date.today()
        listings = Listing.objects.filter(limit_date__lte=today, enabled=True)
        return listings
        
