import React, { useState } from 'react';

import { Chat, ChatMessage } from './chat.js';

import './app.css';

function App() {
    const [messages, setMessages] = useState([]);

    function onSend(userInput) {
        console.log('Need to send the following message: ' + userInput);
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
