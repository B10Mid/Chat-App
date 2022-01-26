import React from 'react';
import './Message.scss';

function Message({ message, timestamp, user, userImage}) {
  return (
    <div className="message">
        <img src={userImage} alt=""/>
        <div className="message-content">
            <h4>
                {user} <span className="message-timestamp">{new Date(timestamp?.toDate()).toUTCString()}</span>
            </h4>
            <p>{message}</p>
        </div>

    </div>
    )
}

export default Message;
