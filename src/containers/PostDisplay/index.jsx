import React from 'react';
import { connect } from 'react-redux';
import { selectors as postSelectors } from 'posts';
import { actions as commentsActions } from 'comments';

import UserPost from 'components/UserPost';
import './PostDisplay.css';

class PostDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postsToDisplay: 10,
        };

        this.onPostClick = this.onPostClick.bind(this);
        this.onViewMoreClick = this.onViewMoreClick.bind(this);
    }

    onViewMoreClick() {
        const { postsToDisplay } = this.state;
        this.setState({ postsToDisplay: (postsToDisplay + 10) });
    }

    getDisplay() {
        const { posts = [] } = this.props;
        const { postsToDisplay } = this.state;
        const postDisplay = [];

        for (let i = 0; i < posts.length && i < postsToDisplay; i += 1) {
            postDisplay.push(<UserPost key={`UserPost_${posts[i].id}`} post={posts[i]} isAlt={i % 2} clickEvent={this.onPostClick} />);
        }

        return postDisplay;
    }

    onPostClick = (post) => {
        const { dispatch } = this.props;

        if (post.comments === null) {
            dispatch(commentsActions.requestComments(post.id));
        }
    }

    render() {
        const postDisplay = this.getDisplay();

        return (
            <div className="PostDisplay">
                { postDisplay }
                <input type="button" onClick={this.onViewMoreClick} value="View More" />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return { //  playing around with selectors
      // posts: postSelectors.getPosts(state),
      posts: postSelectors.getPostsR(state),
  }
};

export default connect(mapStateToProps)(PostDisplay);
