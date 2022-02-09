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

from rest_framework.test import URLPatternsTestCase, APITestCase, RequestsClient

pytestmark = pytest.mark.django_db




class TestGetListings(APITestCase, URLPatternsTestCase):
    urlpatterns = [
        path('api/', include('api.urls')),
    ]

    def test_get(self):
        #Request url
        url = 'http://localhost:8000/api/get_listings'
        client = RequestsClient()

        #Autentication
        client.auth = HTTPBasicAuth('user', 'pass')
        client.headers.update({'x-test': 'true'})
        print("request:",str(client.header))

        #Request
        response = client.get(url)

        #Assertions
        assert response.status_code == 200
        self.assertEqual(response.data,{
        "model": "orders.listing",
        "pk": 1,
        "fields": {
            "enabled": true,
            "limit_date": "2022-02-09T03:00:00Z",
            "name": "Compra febrero",
            "description": "Hola come estan"
        }
    })