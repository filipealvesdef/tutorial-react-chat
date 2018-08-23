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
    static defaultProps = {
        onSend: () => {},
        messages: [],
    };

    state = {
        userInput: '',
    };

    handleTextareaChange = (e) => {
        this.setState({userInput: e.target.value});
    }

    handleSendClick = (e) => {
        this.props.onSend(this.state.userInput);
        this.setState({userInput: ''});
    }

    render() {
        return <div className='chat'>
            <div className='chat__log'>{this.props.messages}</div>
            <div className='chat__input'>
                <textarea
                    rows={4}
                    value={this.state.userInput}
                    onChange={this.handleTextareaChange}
                />
                <button
                    onClick={this.handleSendClick}
                    disabled={!this.state.userInput}
                >Send</button>
            </div>
        </div>;
    }
}

export default Chat;

export { ChatMessage };
