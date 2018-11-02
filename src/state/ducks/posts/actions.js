import * as types from './types';

const requestPosts = () => {
    return {
        type: types.POSTS_REQUEST_START,
    };
};

const receivedPosts = (posts) => {
    return {
        type: types.POSTS_REQUEST_DONE,
        posts,
    };
};

const receivedPostsError = (errorMessage) => {
    return {
        type: types.POSTS_REQUEST_ERROR,
        error: errorMessage,
    };
};

export {
    requestPosts,
    receivedPosts,
    receivedPostsError,
};
