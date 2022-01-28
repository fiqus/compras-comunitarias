from django.shortcuts import render


# Create your views here.
def index(request):
    return render(request, 'api_test/index.html', {})

def room(request, room_name):
    return render(request, 'api_test/room.html', {
        'room_name': room_name
    })