import * as postActions from 'posts/actions';

import * as types from './types';

export function middleware({ dispatch }) {
    return next => (action) => {
        const { type: actionType } = action;

        if (actionType === types.APP_START) {
            dispatch(postActions.requestPosts());
        }

        return next(action);
    };
}
