import json
from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer, AsyncWebsocketConsumer



class ApiConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.channel_layer.group_add("caja", self.channel_name)
        await self.accept()

    async def disconnect(self, close_code):
        pass

    async def receive(self, text_data):
        pass

    async def alert(self, event):
        message = event['text']

        await self.send(text_data=json.dumps({
            'message': message
        }))