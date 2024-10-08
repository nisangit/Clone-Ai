import React, { useState } from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets';

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle the sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className='menu-icon'>
        <button onClick={toggleSidebar}>
          <img src={assets.menu_icon} alt='menu-icon' />
        </button>
      </div>

      <div className={`side-container ${isSidebarOpen ? 'open' : ''}`}>
        <div className='side-contents'>
          <button className='new-chat'>
            <p>+ New Chat</p>
          </button>
          <div className='recent'>
            <p>Sample Prompts</p>
          </div>
          <div className='chats-bar'>
            <div className='chat-line'>
              <img src={assets.message_icon} alt='msgicon' />
              <p>what is react how are you guys...</p>
            </div>
            <div className='chat-line'>
              <img src={assets.message_icon} alt='msgicon' />
              <p>what is react how are you guys...</p>
            </div>
            <div className='chat-line'>
              <img src={assets.message_icon} alt='msgicon' />
              <p>what is react how are you guys...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
