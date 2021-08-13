import { combineReducers } from 'redux';
import chatReducer from './chat';
import userReducer from './user';

export function RootReducer() {
    return combineReducers({
        user: userReducer,
        chat: chatReducer
    });
}