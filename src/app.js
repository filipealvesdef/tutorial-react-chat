import React, { useState } from 'react';

import { Chat, ChatMessage } from './chat.js';

import './app.css';

function App(props) {
    const [messages, setMessages] = useState([]);

    function onSend(userInput) {
        const msg = {from: 'me', text: userInput}
        setMessages(messages.concat([msg]));

        props.agent.sendMessage(userInput).then(response => {
            if (!response) {
                return;
            }

            const msgs = response.map(text => ({
                from: 'her',
                text,
            }));

            setMessages(messages.concat(msgs))
        })
    }

    return <Chat onSend={onSend}>
        {messages.map((m, i) => <ChatMessage
            key={i}
            fromMe={m.from === 'me'}
            children={m.text}
        />)}
    </Chat>;
}

App.defaultProps = {
    agent: {
        state: 'idle',
        sendMessage(userInput) {
            if (this.state === 'idle') {
                this.state = 'recording'
                return Promise.resolve([
                    'Hello I\'m an answering machine. Leave your message after the beep.',
                    'BEEEEEP....',
                ]);
            } else {
                this.state = 'idle'
                return Promise.resolve([
                    'Message recorded...not really',
                ])
            }
        }
    }
}

export default App;
