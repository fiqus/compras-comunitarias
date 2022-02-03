import json
from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer, AsyncWebsocketConsumer



class ApiConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.room_group_name = 'compras-admin'
        await self.channel_layer.group_add(self.room_group_name , self.channel_name)
        await self.accept()

    async def disconnect(self, close_code):
        # Leave room group
        # await self.channel_layer.group_discard('compras-admin', self.channel_name)
        pass

    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        await self.channel_layer.group_send(
            text_data_json
        )

    
   