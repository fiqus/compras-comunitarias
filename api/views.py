from django.http import HttpResponse
from django.shortcuts import render
from compras.orders.models import Listing, Order
import json

from django.core.serializers.json import DjangoJSONEncoder

# Create your views here.
def index(request):
    return render(request, 'api_test/index.html', {})

def room(request, room_name):
    return render(request, 'api_test/room.html', {
        'room_name': room_name
    })

def change_order_status(request):
    order = Order.objects.get(pk=request.body["order_id"])
    order.status = request.body["status"]
    order.save()
    return HttpResponse(status=200)
    
def consult(request):
    return render(request, 'api_test/consult.html', {})

