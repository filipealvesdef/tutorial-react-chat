import React, { useState } from 'react';

import { Chat, ChatMessage } from './chat.js';

import './app.css';

function App() {
    const [messages, setMessages] = useState([]);

    function onSend(userInput) {
        const msg = {from: 'me', text: userInput}
        setMessages(messages.concat([msg]));
    }

    return <Chat onSend={onSend}>
        {messages.map((m, i) => <ChatMessage
            key={i}
            fromMe={m.from === 'me'}
            children={m.text}
        />)}
    </Chat>;
}

export default App;
