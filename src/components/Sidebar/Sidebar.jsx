import React, { useState } from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets';

function Sidebar({ onPromptClick }) { // Receive the callback as a prop
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleNewChat = () => {
    // Refresh the page
    window.location.reload();
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
          <button className='new-chat' onClick={handleNewChat}> {/* Add onClick here */}
            <p>+ New Chat</p>
          </button>
          <div className='recent'>
            <p>Sample Prompts</p>
          </div>
          <div className='chats-bar'>
            <div className='chat-line' onClick={() => onPromptClick('What is Generative AI ?')}>
              <img src={assets.message_icon} alt='msgicon' />
              <p>What is Generative AI ?</p>
            </div>
            <div className='chat-line' onClick={() => onPromptClick('What is React JS ?')}>
              <img src={assets.message_icon} alt='msgicon' />
              <p>What is React JS ?</p>
            </div>
            <div className='chat-line' onClick={() => onPromptClick('Leading actors in Tamil ?')}>
              <img src={assets.message_icon} alt='msgicon' />
              <p>Leading actors in Tamil ?</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
