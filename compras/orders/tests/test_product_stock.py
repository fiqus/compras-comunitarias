import pytest
from compras.business.business import Business
from compras.orders.models import Listing, ListingProduct, Producer, Product
from datetime import datetime
from freezegun import freeze_time
from .factory import create_listing, create_user, create_order, add_product_to_order

pytestmark = pytest.mark.django_db

@freeze_time("2020-10-10 12:00:00")
def test_business_updates_listing_products():
    initial_stock = 15
    listing = create_listing(enabled=True, limit_date=datetime(2021, 10, 11, 13), stock=initial_stock)
    product = listing.listingproduct_set.all().first()
    user = create_user()
    order = create_order(user=user, listing=listing)
    stock_bought = 2
    add_product_to_order(order=order, product=product, amount=stock_bought)
    Business().update_stock_products(order)
    updated_product = listing.listingproduct_set.all().first()
    assert initial_stock - stock_bought == updated_product.stock

@freeze_time("2020-10-10 12:00:00")
def test_business_product_with_unlimited_stock():
    listing = create_listing(enabled=True, limit_date=datetime(2021, 10, 11, 13))
    product = listing.listingproduct_set.all().first()
    user = create_user()
    order = create_order(user=user, listing=listing)
    stock_bought = 2
    add_product_to_order(order=order, product=product, amount=stock_bought)
    Business().update_stock_products(order)
    updated_product = listing.listingproduct_set.all().first()
    assert None == updated_product.stock

# test_update_order_with_new_amount_of_products (edit)

# test_cant_by_more_than_stock
