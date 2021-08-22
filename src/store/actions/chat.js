import { query } from "../../api";
import { GET_MESSAGES_RECEIVE, UPLOAD_NEW_MESSAGES_RECEIVE, PUSH_MESSAGE, BLOCK_UPLOAD_MESSAGES } from "../constants";

export const chatActions = {
    getMessages: startRange => messagesAction(startRange),
    pushMessage: message => pushNewMessageAction(message)
};

/**
 * Get messages.
 * 
 * @param {number} startRange 
 * @returns 
 */
function messagesAction(startRange) {
    return async function(dispatch) {
        dispatch(blockDownloadMessages());
        try {
            const messages = await query.chat.getMessages(startRange);

            dispatch(
                startRange === 0
                ? messagesReceiveAction(messages)
                : uploadMessagesReceiveAction(messages)
            );
        } catch(error) {
            console.log(error);
        }
    };
}

/**
 * Block the button upload more messages.
 * 
 * @returns {Object}
 */
function blockDownloadMessages() {
    return {
        type: BLOCK_UPLOAD_MESSAGES
    }
}

/**
 * Get messages for first render.
 * 
 * @param {Array} messages 
 * @returns {Object}
 */
function messagesReceiveAction(messages) {
    return {
        type: GET_MESSAGES_RECEIVE,
        payload: { ...messages }
    };
}

/**
 * Upload new messages from db to store.
 * 
 * @param {Array} messages 
 * @returns {Object}
 */
function uploadMessagesReceiveAction(messages) {
    return {
        type: UPLOAD_NEW_MESSAGES_RECEIVE,
        payload: { ...messages }
    }
}

/**
 * Add new message from web socket onmessage.
 * 
 * @param {Object} message {
 *                              id: number,
 *                              id_user: number,
 *                              message: string,
 *                              date: number,
 *                              nickname: string
 *                         }
 * @returns {Object}
 */
function pushNewMessageAction(message) {
    return {
        type: PUSH_MESSAGE,
        payload: { message }
    }
}