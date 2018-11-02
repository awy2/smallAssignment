import React from 'react';
import './UserComment.css';

const UserComment = (props) => {
    const { comment: { name = '', email = '', body = '' } = { }, isAlt } = props;

    return (
        <div className={`UserComment ${isAlt && 'alt'}`}>
            <p>{`Name: ${name}`}</p>
            <p>{`Email: ${email}`}</p>
            <p>{`Body: ${body}`}</p>
        </div>
    );
};

export default UserComment;
