import React, { Component } from 'react';
import './app.css';

import Chat from './chat';
import { ChatMessage } from './chat';

class App extends Component {
    state = {
        messages: [],
    };

    handleSend = (userInput) => {
        const msg = {
            from: 'me',
            text: userInput,
        };
        const messages = this.state.messages.slice();
        messages.push(msg);
        this.setState({messages: messages});
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
