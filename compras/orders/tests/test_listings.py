import pytest
from compras.business.business import Business
from compras.orders.models import Listing, ListingProduct, Producer, Product
from datetime import datetime
from freezegun import freeze_time

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

def test_business_returns_nothing_when_there_are_no_listings():
    business = Business()
    assert len(business.available_listings()) == 0

@freeze_time("2020-10-10")
def test_business_returns_available_listing_when_one_exists():
    business = Business()
    expire_date = datetime(2020, 10, 11, 13)
    listing = create_listing(enabled=True, limit_date=expire_date)
    assert len(business.available_listings()) == 1

@freeze_time("2020-10-10 12:00:00")
def test_business_returns_available_listing_when_one_exists_before_time():
    business = Business()
    expire_date = datetime(2020, 10, 10, 13)
    listing = create_listing(enabled=True, limit_date=expire_date)
    assert len(business.available_listings()) == 1

@freeze_time("2020-10-10 12:00:00")
def test_business_returns_nothing_when_listing_is_expired():
    business = Business()
    expire_date = datetime(2020, 10, 10, 11)
    listing = create_listing(enabled=True, limit_date=expire_date)
    assert len(business.available_listings()) == 0

@freeze_time("2020-10-10")
def test_business_returns_nothing_when_listing_is_not_enabled():
    business = Business()
    expire_date = datetime(2020, 10, 11, 13)
    listing = create_listing(enabled=False, limit_date=expire_date)
    assert len(business.available_listings()) == 0
