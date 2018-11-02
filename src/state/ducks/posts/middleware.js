import { postURL } from 'constants/config';
import * as postType from './types';
import * as postAction from './actions';

export function middleware({ dispatch }) {
    return next => (action) => {
        const {
            type: actionType,
        } = action;

        if (actionType === postType.POSTS_REQUEST_START) {
            fetch(postURL)
                .then(response => response.json())
                .then((data) => {
                    dispatch(postAction.receivedPosts(data));
                })
                .catch((err) => {
                    dispatch(postAction.receivedPostsError(err));
                });
        }

        return next(action);
    };
}
