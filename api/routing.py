from django.urls import re_path

from . import consumers
websocket_urlpatters = [
    re_path(r'ws/api/consult/',consumers.ApiConsumer.as_asgi()),
]