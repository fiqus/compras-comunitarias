from django.urls import path
from compras import orders

from . import views
app_name = "api"
urlpatterns = [
    path('', views.index, name='index'),
    path('<str:room_name>/', views.room, name='room'),
    path('listing/<int:listing_id>/orders', orders.views.listing_orders, name='listing_orders'),
    path('order/<int:order_id>/<str:status>/change_status', views.change_order_status, name="order_change_status")
]