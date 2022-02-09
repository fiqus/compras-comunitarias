import pytest
from django.contrib.auth.models import AnonymousUser
from django.http.response import Http404
from django.test import RequestFactory
from django.urls import include, path, reverse

from compras.orders.models import Listing, ListingProduct, Producer, Product

from compras.users.models import User
from compras.users.tests.factories import UserFactory
from compras.orders.views import *
from requests.auth import HTTPBasicAuth
from datetime import datetime

from rest_framework.authtoken.models import Token
from rest_framework.test import URLPatternsTestCase, APITestCase

pytestmark = pytest.mark.django_db

def create_listing(enabled, limit_date):
    # TODO: convert this into object factories
    producer = Producer(name='Pagblo', url='adf@sdf.com', description='asdfasdf')
    producer.save()
    product = Product(name='Faina', producer_id=producer.id, description='rellena')
    product.save()
    listing = Listing(enabled=enabled, limit_date=limit_date, description="Compa importante")
    listing.save()
    listing_product = ListingProduct(listing_id=listing.id, product_id=product.id, price=10)
    listing_product.save()
    
    # Adds listing product
    listing.products.add(product)
    listing.save()
    return listing



class TestGetListings(APITestCase, URLPatternsTestCase):

    urlpatterns = [
        path('api/', include('api.urls')),
    ]

    def setUp(self):
        self.user = User.objects.create(name="jero", dni="12345678", email="tujavie", username="jero", password="tujavie")
        self.token = Token.objects.create(user=self.user)
        self.api_authentication()
        expire_date = datetime(2023, 10, 11, 13)
        self.listing1 = create_listing(enabled=True, limit_date=expire_date)
        self.listing2 = create_listing(enabled=True, limit_date=expire_date)
        self.listings = [self.listing1, self.listing2]
        self.listings_str = serializers.serialize('json', self.listings)
        self.listings_json = json.loads(self.listings_str)
        self.maxDiff = None
    
    def api_authentication(self):
        self.client.credentials(HTTP_AUTHORIZATION="Token " + self.token.key)

    def test_get(self):
        #Request url
        url = 'http://localhost:8000/api/get_listings'
        
        #Request
        response = self.client.get(url)

        #Assertions
        assert response.status_code == 200

        print("Response",str(response.data))
        print("Esperado",str(self.listings_json))

        self.assertEqual(response.data, self.listings_json)