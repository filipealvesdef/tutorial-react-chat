import React from 'react';

import './chat.css';

function ChatMessage(props) {
    let className = 'chat__message';

    if (props.fromMe) {
        className += ' chat__message--from-me';
    } else {
        className += ' chat__message--from-her';
    }

    return <div className={className}>
      {props.children}
    </div>;
}

ChatMessage.defaultProps = {
    fromMe: false,
};

function Chat() {
    return <div className='chat'>
      <div className='chat__log'>
        <ChatMessage fromMe>
          Hi.
        </ChatMessage>
        <ChatMessage>
          Hello.
        </ChatMessage>
        <ChatMessage fromMe>
          How are you?
        </ChatMessage>
        <ChatMessage>
          I'm good. How about you?
        </ChatMessage>
        <ChatMessage fromMe>
          I'm fine.
        </ChatMessage>
      </div>
      <div className='chat__input'>
      </div>
    </div>;
}

export default Chat;
