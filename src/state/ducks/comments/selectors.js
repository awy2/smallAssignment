
export function getComments(state, post) {
    return state.commentsReducer.comments[post.id] || null;
}
