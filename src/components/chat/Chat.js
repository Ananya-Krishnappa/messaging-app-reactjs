import React, { useEffect, useState } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined, InsertEmoticon } from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic';
import axios from '../../utils/Axios';
import './Chat.scss';
const Chat = ({ messages }) => {
    const [seed, setSeed] = useState("");
    const [input, setInput] = useState("");
    const sendMessage = async (e) => {
        e.preventDefault();
        await axios.post('/messages/new', {
            message: input,
            name: "ananya",
            timestamp: new Date().toUTCString(),
            received: true
        });
        setInput("");
    }
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [])
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/b${seed}.svg`} />
                <div className="chat__headerInfo">
                    <h3>Person {seed}</h3>
                    <p>Last seen at...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                {messages.map(message => (
                    <p className={`chat__message ${message.received &&
                        'chat__receiver'}`}>
                        <span className="chat__name">{message.name}</span>
                        {message.message}
                        <span className="chat__timestamp">
                            {message.timestamp}
                        </span>
                    </p>
                ))}
            </div>
            <div className="chat__footer">
                <InsertEmoticon />
                <form>
                    <input
                        placeholder="Type a message"
                        type="text"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                    />
                    <button type="submit" onClick={sendMessage} >Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}
export default Chat;