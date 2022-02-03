from django.urls import path
from compras import orders

from . import views

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

app_name = "api"

urlpatterns = [
    path('', views.index, name='index'),
    path('<str:room_name>/', views.room, name='room'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('listing/<int:listing_id>/orders', orders.views.ListingOrders.as_view(), name='listing_orders'),
    path('order/change_status', views.change_order_status, name="order_change_status"),
    path('consult/', views.consult, name="consult"),

]