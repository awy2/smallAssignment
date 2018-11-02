import { commentURL } from 'constants/config';
import * as types from './types';
import * as commentAction from './actions';

export function middleware({ dispatch }) {
    return next => (action) => {
        const {
            type: actionType,
            id,
        } = action;

        if (actionType === types.COMMENTS_REQUEST_START) {
            fetch(commentURL + id)
                .then(response => response.json())
                .then((data) => {
                    dispatch(commentAction.receivedComments(data, id));
                })
                .catch((err) => {
                    dispatch(commentAction.receivedCommentsError(err));
                });
        }

        return next(action);
    };
}
