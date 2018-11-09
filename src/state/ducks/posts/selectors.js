import { selectors as commentSelectors } from 'comments';
import { createSelector } from 'reselect';

let callCount = 0;

export function getPosts(state) {
    const { postsReducer: { posts = [] } } = state;

    console.log(`getPost get called ${callCount += 1} times`);
    return posts.map((post) => {
        return {
            ...post,
            comments: commentSelectors.getComments(state, post),
        };
    });
}

export const getPostsR = createSelector(
  [getPosts],
  (posts, id) => {
      debugger
      return posts;
  },
);