import React from 'react';

import './chat.css';

class ChatMessage extends React.Component {
    static defaultProps = {
        fromMe: false,
    };

    render() {
        let className = 'chat__message'
        if (this.props.fromMe) {
            className += ' chat__message--from-me';
        } else {
            className += ' chat__message--from-her';
        }

        return <div className={className}>
            {this.props.children}
        </div>;
    }
}

class Chat extends React.Component {
    render() {
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
}

export default Chat;
