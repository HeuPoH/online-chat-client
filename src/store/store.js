import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { initState } from './initState';
import { RootReducer } from './reducers/RootReducer';

const store = createStore(RootReducer(), initState, applyMiddleware(thunk));

store.subscribe(() => {
    console.log(store.getState());
})

export default store;