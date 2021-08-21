class WSocket {
    constructor(url) {
        this.WSocket = new WebSocket(url);
    }

    static connect(url) {
        return new WSocket(url);
    }

    sendMessage(message) {
        this.WSocket.send(message);
    }

    connected(callback) {
        this.WSocket.onopen = () => {
            callback('Подключено');
        }
    }

    acceptMessage(callback) {
        this.WSocket.onmessage = message => {
            callback(JSON.parse(message.data));
        };
    }
}

export default WSocket;