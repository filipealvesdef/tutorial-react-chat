import React, { useState } from 'react';

import { Chat, ChatMessage } from './chat.js';

import './app.css';

function App() {
    const [messages, setMessages] = useState([
        {
            from: 'me',
            text: 'Hi.',
        },
        {
            from: 'her',
            text: 'Hello.',
        },
        {
            from: 'me',
            text: 'How are you?',
        },
        {
            from: 'her',
            text: 'I\'m good. How about you?',
        },
        {
            from: 'me',
            text: 'I\'m fine.',
        },
    ]);

    return <Chat>
        {messages.map((m, i) => <ChatMessage
            key={i}
            fromMe={m.from === 'me'}
            children={m.text}
        />)}
    </Chat>;
}

export default App;
