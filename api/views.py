from django.http import HttpResponse
from django.shortcuts import render
from compras.orders.models import Listing, Order
import json

from django.core.serializers.json import DjangoJSONEncoder

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import authentication, permissions

from django.views.generic import TemplateView
from django.http import HttpResponse

from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync

# Create your views here.
def index(request):
    return render(request, 'api_test/index.html', {})

def room(request, room_name):
    return render(request, 'api_test/room.html', {
        'room_name': room_name
    })

class OrderStatus(APIView):
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        data = json.loads(request.body)
        order = Order.objects.get(pk=data["order_id"])
        order.status = data["status"]
        order.save()

        channel_layer = get_channel_layer()
        async_to_sync(channel_layer.group_send(
            'compras-admin',
            {
                'change': '1'
            }
        ))
        
        return Response()


def consult(request):
    return render(request, 'api_test/consult.html', {})

