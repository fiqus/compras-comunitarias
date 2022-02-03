import json
from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer, AsyncWebsocketConsumer



class ApiConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.room_group_name = 'compras-admin'
        self.channel_name = "bokita"
        await self.channel_layer.group_add(self.room_group_name , self.channel_name)
        await self.accept()
        print("CONSUMER", self.channel_name, self.room_group_name)

    async def disconnect(self, close_code):
        # Leave room group
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        await self.channel_layer.group_send(
            text_data_json
        )

    
    # catches group messages from channel layer and forwards downstream to client 
    async def forward_group_message(self, event):
            await self.send(json.dumps(event['data'], default=str))

    # Sends message to all channels in a group cia the channel layer
    # def send_to_connection(connection_id, data):
    #     """Send the data to the connected socket id."""
    #     return get_channel_layer().group_send(
    #         connection_id, 
    #         {"type": "forward_group_message", "data": data}
    #     )

    
   