from compras.orders.models import Listing, ListingProduct, Producer, Product, Order, OrderProduct
from compras.users.models import User

def create_listing(enabled, limit_date, stock=None):
    # TODO: convert this into object factories
    producer = Producer(name='Pagblo', url='adf@sdf.com', description='asdfasdf')
    producer.save()
    product = Product(name='Faina', producer_id=producer.id, description='rellena')
    product.save()
    listing = Listing(enabled=enabled, limit_date=limit_date, description="Compa importante")
    listing.save()
    listing_product = ListingProduct(listing_id=listing.id, product_id=product.id, price=10, stock = stock)
    listing_product.save()
    
    # Adds listing product
    listing.products.add(product)
    listing.save()
    return listing

def create_user():
    user = User(name="Pablo", email="asd@asdf.com")
    user.save()
    return user

def create_order(user, listing):
    order = Order(user_id=user.id, listing_id=listing.id)
    order.save()
    return order

def add_product_to_order(order, product, amount):
    order_product = OrderProduct(product_id=product.id, order_id=order.id, amount=amount)
    order_product.save()