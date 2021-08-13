import { SIGN_IN_ERROR, SIGN_IN_RECEIVE, SIGN_OUT } from "../constants";

function userReducer(state = null, action) {
    switch(action.type) {
        case SIGN_IN_RECEIVE:
            return {
                ...state,
                ...action.payload,
                response: null
            };
        break;

        case SIGN_IN_ERROR:
            return {
                ...state,
                response: {
                    status: false,
                    message: action.payload.error
                }
            };
        break;

        case SIGN_OUT:
            return { };
        break;

        default: return state;
    }
}

export default userReducer;