import json
from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer, AsyncWebsocketConsumer



class ApiConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.channel_layer.group_add('compras-admin', self.channel_name)
        await self.accept()

    async def disconnect(self, close_code):
        # Leave room group
        # await self.channel_layer.group_discard('compras-admin', self.channel_name)
        pass

    
   