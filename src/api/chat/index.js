import { getMessages } from "./getMessages";
import { wsConnect } from "./wsConnect";

export const chat = {
    getMessages: getMessages,
    wsConnect: wsConnect
}