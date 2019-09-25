import React, { useState } from 'react';

import './chat.css';

function ChatMessage(props) {
    let className = 'chat__message';

    if (props.fromMe) {
        className += ' chat__message--from-me';
    } else {
        className += ' chat__message--from-her';
    }

    return <div className={className} ref={e => e && e.scrollIntoView()}>
      {props.children}
    </div>;
}

ChatMessage.defaultProps = {
    fromMe: false,
};

function Chat(props) {
    const [userInput, setUserInput] = useState('');

    function send() {
        setUserInput('')
        props.onSend(userInput)
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            send();
            e.preventDefault();
        }
    }

    return <div className='chat'>
      <div className='chat__log'>
        {props.children}
      </div>
      <div className='chat__input'>
        <textarea
            rows={4}
            value={userInput}
            onChange={e => {setUserInput(e.target.value);}}
            onKeyDown={handleKeyDown}
        />
        <button
            onClick={send}
            disabled={!userInput}
        >Send</button>
      </div>
    </div>;
}

Chat.defaultProps = {
    onSend: () => {}
};

export { Chat, ChatMessage };
