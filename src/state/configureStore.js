import { createStore, applyMiddleware, combineReducers } from 'redux';
import { middleware as postMiddleware } from 'posts/middleware';
import { middleware as commentsMiddleware } from 'comments/middleware';
import { middleware as utilsMiddleware } from 'utils/middleware';

import * as reducers from './ducks';

export default function configureStore() {
    const middleware = [utilsMiddleware, postMiddleware, commentsMiddleware];
    const rootReducer = combineReducers(reducers);
    const store = createStore(rootReducer, applyMiddleware(...middleware));

    return store;
}
