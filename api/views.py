from django.http import HttpResponse
from django.shortcuts import render
from compras.orders.models import Listing, Order
import json

from django.core.serializers.json import DjangoJSONEncoder

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import authentication, permissions

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
        return Response()


def consult(request):
    return render(request, 'api_test/consult.html', {})