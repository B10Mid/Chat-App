import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import './Chat.scss';
import db from '../../firebase/firebase';
import Message from './Message/Message';
import ChatInput from './ChatInput';

function Chat() {
    const { channelId } = useParams();
    const [channelDetails, setChannelDetails] = useState(null);
    const [channelMessages, setChannelMessages] = useState([]);

    useEffect(() => {
        if (channelId) {
            db.collection('channels').doc(channelId).onSnapshot(snapshot => (
                setChannelDetails(snapshot.data())
            ))
        }

        db.collection('channels').doc(channelId).collection('messages').orderBy('timestamp', 'asc').onSnapshot(
            (snapshot) => setChannelMessages(snapshot.docs.map(doc => doc.data())
        ))

    }, [channelId]);



  return (
  <div className="chat">
    <div className="chat-header">
        <div className="chat-header-left">
            <h3 className="channal-name">
                <strong>#{channelDetails?.name}</strong>
                <StarBorderIcon />
            </h3>
        </div>
    </div>

    <div className="chat-messages">
        {/* message components */}
        {channelMessages.map(({message, timestamp, user, userImage}) => (
            <Message message={message} timestamp={timestamp} user={user} userImage={userImage} />
        ))}
    </div>

    <ChatInput channelName={channelDetails?.name} channelId={channelId}/>
  </div>
  );
}

export default Chat;