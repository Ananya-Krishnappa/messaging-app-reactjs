import React, { useEffect, useState } from 'react';
import Pusher from 'pusher-js';
import './App.scss';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/chat/Chat';
import axios from './utils/Axios';

function App() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    axios.get("/messages/sync").then(res => {
      setMessages(res.data);
    })
  }, []);
  useEffect(() => {
    var pusher = new Pusher('8bc57a4fd00912cb2863', {
      cluster: 'ap2'
    });
    // messages => channel
    // inserted => event
    // The snippet below connects to Channels and 
    // subscribes to a channel called 'messages', listening for an event called 'inserted'.
    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (data) => {
      setMessages([...messages, data])
    });
    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    }
  }, [messages]);
  console.log(messages);
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar></Sidebar>
        <Chat messages={messages} ></Chat>
      </div>
    </div>
  );
}
export default App;
