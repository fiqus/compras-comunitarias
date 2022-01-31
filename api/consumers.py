import json
from channels.generic.websocket import WebsocketConsumer


class ApiConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()

    def disconnect(self, close_code):
        pass

    def receive(self, text_data):
        text_data_json = json.loads(text_data)
        change = text_data_json['change']

        self.send(text_data=json.dumps({
            'change': change
        }))