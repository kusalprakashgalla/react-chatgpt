import React, { useState } from 'react';
import SideMenu from './components/SideMenu';
import ChatWindow from './components/ChatWindow';
import './App.css';
const App = () => {

  return (
    <div className="app" >
        <div className='app-in'>
            <div className='side-menu'>
                <SideMenu />
            </div>
            <div className='chat-window' >
                <ChatWindow />
            </div>
        </div>
    </div>
  );
};

export default App;