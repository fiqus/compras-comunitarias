from django.urls import path

from compras.orders.views import (
    create_order,
    view_producer,
)


app_name = "orders"
urlpatterns = [
    path("create/", view=create_order, name="create"),
    path("producer/", view=View_producer, name="producer"),
]
