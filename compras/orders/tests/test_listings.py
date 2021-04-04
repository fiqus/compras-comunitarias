import pytest
from compras.business.business import Business
from datetime import datetime
from freezegun import freeze_time
from .factory import create_listing

pytestmark = pytest.mark.django_db

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
