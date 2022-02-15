from django.urls import path
from compras import orders

from . import views

from rest_framework.authtoken.views import obtain_auth_token

app_name = "api"

urlpatterns = [
    path('token/', obtain_auth_token, name='token_obtain_pair'),
    path('listing/<int:listing_id>/orders', orders.views.ListingOrders.as_view(), name='listing_orders'),
    path('order/change_status', views.OrderStatus.as_view(), name="order_change_status"),
    path('get_listings', orders.views.get_listings.as_view(), name='select_listing'),
    path('listing_products/<int:listing_id>', orders.views.get_listing_products.as_view(), name="listing_products"),
    path('create_order/<int:listing_id>', orders.views.CreateOrder.as_view(), name="create_order"),
    path('order/<int:listing_id>', orders.views.get_order.as_view(), name="get_order"),
]