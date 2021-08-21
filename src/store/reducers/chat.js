import { GET_MESSAGES_RECEIVE, UPLOAD_NEW_MESSAGES_RECEIVE, PUSH_MESSAGE, BLOCK_DOWNLOAD_MESSAGES } from "../constants";

function chatReducer(state = null, action) {
    let newState;

    switch(action.type) {
        case GET_MESSAGES_RECEIVE: case UPLOAD_NEW_MESSAGES_RECEIVE:
            newState = { ...state };

            action.type === GET_MESSAGES_RECEIVE 
                ? newState.messages = [ ...action.payload.messages ]
                : newState.messages = [ ...state.messages, ...action.payload.messages ];

            newState.startRange = newState.messages.length;
            //Total messages
            newState.count = action.payload.count;
            //Count of messages that can be uploaded
            newState.countHidden = newState.count - newState.startRange;
            newState.isLoading = false;

            return newState;
        break;

        case BLOCK_DOWNLOAD_MESSAGES: 
            return { ...state, isLoading: true };
        break;

        case PUSH_MESSAGE:
            newState = { ...state };
            newState.messages = [ action.payload.message, ...newState.messages ];
            newState.count += 1;
            newState.startRange += 1;

            return newState;
        break;

        default: return state;
    }
}

export default chatReducer;