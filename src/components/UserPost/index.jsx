import React from 'react';
import UserComment from 'components/UserComment';
import './UserPost.css';

class UserPost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };

        this.onClickEvent = this.onClickEvent.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        const { isOpen } = this.state;

        return nextState.isOpen !== isOpen || nextProps.post.comments !== null;
    }

    onClickEvent() {
        const { isOpen } = this.state;
        const { clickEvent, post } = this.props;

        if (!post.comments) {
            clickEvent(post);
        }

        this.setState({ isOpen: !isOpen });
    }

    displayComments() {
        const { post: { comments } } = this.props;
        let userComments = [];

        if (comments) {
            userComments = comments.map((comment, index) => {
                return <UserComment key={`UserPost_${comment.postId}_comment${comment.id}`} comment={comment} isAlt={index % 2} />;
            });
        }

        return userComments;
    }

    render() {
        const { post: { title = '', body = '' } = {}, isAlt } = this.props;
        const { isOpen } = this.state;

        return (
            <div className={`UserPost ${isAlt && 'alt'}`} onClick={this.onClickEvent}>
                <p>{`Title: ${title}`}</p>
                <p>{`Body: ${body}`}</p>
                { isOpen && this.displayComments() }
            </div>
        );
    }
}

export default UserPost;
