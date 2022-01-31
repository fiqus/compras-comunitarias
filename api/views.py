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

def change_order_status(request, order_id, status):
    # new_status = recived_data["status"]
    new_status = status
    # order_recived_id = data["order_id"]
    order_id_changed = order_id
    order = Order.objects.filter(pk=order_id_changed).update(status=new_status)
    
    return HttpResponse(status=200)
    
    

