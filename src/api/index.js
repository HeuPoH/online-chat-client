import { chat } from "./chat/index";
import { user } from "./user/index";

export const query = {
    user: { ...user },
    chat: { ...chat }
};