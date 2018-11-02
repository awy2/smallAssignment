import * as types from './types';

const defaultState = {
    isFetching: false,
    posts: [],
};

const postsReducer = (state = defaultState, action) => {
    switch (action.type) {
    case types.POSTS_REQUEST_START:
        return {
            ...state,
            isFetching: true,
        };
    case types.POSTS_REQUEST_DONE:
        return {
            ...state,
            isFetching: false,
            posts: action.posts,
        };
    default:
        return state;
    }
};

export default postsReducer;
