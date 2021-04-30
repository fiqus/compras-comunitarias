from django.urls import path

from compras.users.views import (
    user_redirect_view,
    user_update_view,
    
)

app_name = "users"
urlpatterns = [
    path("~redirect/", view=user_redirect_view, name="redirect"),
    path("~update/", view=user_update_view, name="update"),
    
]
