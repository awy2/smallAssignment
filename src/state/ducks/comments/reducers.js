import * as types from './types';

const defaultState = {
    isFetching: false,
    comments: {},
};

const commentsReducer = (state = defaultState, action) => {
    switch (action.type) {
    case types.COMMENTS_REQUEST_START:
        return {
            ...state,
            isFetching: true,
        };
    case types.COMMENTS_REQUEST_DONE:
        return {
            ...state,
            comments: Object.assign({}, state.comments, { [action.id]: action.comment }),
        };
    default:
        return state;
    }
};

export default commentsReducer;
