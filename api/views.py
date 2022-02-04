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

class OrderStatus(APIView):
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        data = json.loads(request.body)
        order = Order.objects.get(pk=data["order_id"])
        order.status = data["status"]
        order.save()

        channel_layer = get_channel_layer()
        async_to_sync(channel_layer.group_send)(
            'caja',
            {'type': 'alert', 'text': "hola"}
        )
        
        return Response()
