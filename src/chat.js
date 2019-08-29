import React from 'react';

import './chat.css';

function ChatMessage(props) {
    return <div className='chat__message'>
      {props.children}
    </div>;
}

function Chat() {
    return <div className='chat'>
      <div className='chat__log'>
        <ChatMessage>
          Hi.
        </ChatMessage>
        <ChatMessage>
          Hello.
        </ChatMessage>
        <ChatMessage>
          How are you?
        </ChatMessage>
        <ChatMessage>
          I'm good. How about you?
        </ChatMessage>
        <ChatMessage>
          I'm fine.
        </ChatMessage>
      </div>
      <div className='chat__input'>
      </div>
    </div>;
}

export default Chat;
