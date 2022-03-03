from django.urls import path
from django.contrib import admin
from compras.orders.views import (
    create_order,
    View_producer,
    user_detail_view,
    Select_listing
)


app_name = "orders"
urlpatterns = [
    # path("create/<int:pk>", view=create_order, name="create"),
    path("producer/<int:pk>", view=View_producer.as_view(), name="producer"),
    path("user_detail/", view=user_detail_view, name="detail"),
    path("select_listing/", view=Select_listing.as_view(), name="select")
]

