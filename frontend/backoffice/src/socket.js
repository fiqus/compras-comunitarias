class WebSocketService {
    static instance = null;
    callbacks = {};
  
    static getInstance() {
      if (!WebSocketService.instance) {
        WebSocketService.instance = new WebSocketService();
      }
      return WebSocketService.instance;
    }
  
    constructor() {
      this.socketRef = null;
    }
  
    connect() {
      const path = 'ws://localhost:8000/ws/';
      this.socketRef = new WebSocket(path);
      this.socketRef.onopen = () => {
        console.log('WebSocket open');
      };
      this.socketRef.onmessage = e => {
        this.socketNewMessage(e.data)
      };
  
      this.socketRef.onerror = e => {
        console.log(e.message);
      };
      this.socketRef.onclose = () => {
        console.log("WebSocket closed let's reopen");
        this.connect();
      };
    }

    addCallbacks(reloadCallback) {
      this.callbacks["reload"] = reloadCallback;
    }

    socketNewMessage(data) {
      this.callbacks.reload();
    }
  
}
  
const WebSocketInstance = WebSocketService.getInstance();

export default WebSocketInstance;