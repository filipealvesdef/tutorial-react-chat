import React, { Component } from 'react';
import './app.css';

import Chat from './chat';
import { ChatMessage } from './chat';

class App extends Component {
    state = {
        messages: [],
    };

    handleSend = (userInput) => {
        console.log('Need to send message: ' + userInput);
    }

    render() {
        const messageElements = this.state.messages.map((msg, i) => <ChatMessage
            key={i}
            fromMe={msg.from === 'me'}
        >{msg.text}</ChatMessage>);

        return <div className="App">
            <Chat
                messages={messageElements}
                onSend={this.handleSend}
            />
        </div>;
    }
}

export default App;
