import React, { useState } from 'react';
import './ChatInput.scss';
import Button from '@mui/material/Button';
import db from '../../firebase/firebase';
import { useStateValue } from '../../providers/StateProvider';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

function ChatInput({ channelName, channelId }) {

    const [input, setInput] = useState('');
    const [{ user }] = useStateValue();

    const sendMessage = (e) => {
        e.preventDefault();

        if (channelId) {
            db.collection('channels').doc(channelId).collection('messages').add({
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                user: user.displayName,
                userImage: user.photoURL,
            });
        }
    };

  return (
    <div className="chat-input">
        <form>
            <input value={input} onChange={e => setInput(e.target.value)} placeholder={`Message #${channelName?.toLowerCase()}`}/>
            <Button type="submit" onClick={sendMessage}>SEND</Button>
        </form>
    </div>
  );
}

export default ChatInput;
