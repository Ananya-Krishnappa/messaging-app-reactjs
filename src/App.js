import React, { useEffect, useState } from 'react';
import Pusher from 'pusher-js';
import './App.scss';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
function App() {
  const [messages, setMessages] = useState([])
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
        <Chat></Chat>
      </div>
    </div>
  );
}
export default App;
