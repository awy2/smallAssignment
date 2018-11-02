import * as types from './types';

const requestComments = (id) => {
    return {
        type: types.COMMENTS_REQUEST_START,
        id,
    };
};

const receivedComments = (comment, id) => {
    return {
        type: types.COMMENTS_REQUEST_DONE,
        comment,
        id,
    };
};

const receivedCommentsError = (errorMessage) => {
    return {
        type: types.COMMENTS_REQUEST_ERROR,
        error: errorMessage,
    };
};

export {
    requestComments,
    receivedComments,
    receivedCommentsError,
};
