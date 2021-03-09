from django.urls import path

from compras.orders.views import (
    order_create_view,
)

app_name = "orders"
urlpatterns = [
    path("create/", view=order_create_view, name="create"),
]
