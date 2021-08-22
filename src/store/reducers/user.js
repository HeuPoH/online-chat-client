import {
    USER_UPDATE_DATA,
    USER_REQUEST_RECEIVE,
    USER_REQUEST_ERROR,
    USER_DELETE_DATA } from "../constants";

function userReducer(state = null, action) {
    switch(action.type) {
        case USER_REQUEST_RECEIVE:
            return {
                ...state,
                response: {
                    result: true,
                    message: action.payload.message
                }
            };
        break;

        case USER_REQUEST_ERROR:
            return {
                ...state,
                response: {
                    result: false,
                    message: action.payload.message
                }
            };
        break;

        case USER_UPDATE_DATA:
            return {
                ...state,
                ...action.payload,
                response: null
            };
        break;

        case USER_DELETE_DATA:
            return { };
        break;

        default: return state;
    }
}

export default userReducer;