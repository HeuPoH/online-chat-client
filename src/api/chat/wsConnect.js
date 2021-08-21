import WSocket from "../../functions/WSocket";

export function wsConnect() {
    const url = 'ws://localhost:3000/chat';

    return WSocket.connect(url);
}