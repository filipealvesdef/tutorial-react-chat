import React from 'react';

import './chat.css';

class ChatMessage extends React.Component {
    render() {
        return <div className='chat__message'>
            {this.props.children}
        </div>;
    }
}

class Chat extends React.Component {
    render() {
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
}

export default Chat;
