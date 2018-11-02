import { selectors as commentSelectors } from 'comments';

export function getPosts(state) {
    const { postsReducer: { posts = [] } } = state;

    return posts.map((post) => {
        return {
            ...post,
            comments: commentSelectors.getComments(state, post),
        };
    });
}
