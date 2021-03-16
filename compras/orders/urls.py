from django.urls import path

from compras.orders.views import (
    create_order,
)

app_name = "orders"
urlpatterns = [
    path("create/", view=create_order, name="create"),
]
