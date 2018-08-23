import React, { Component } from 'react';
import './app.css';

import Chat from './chat';

class App extends Component {
    handleSend = (userInput) => {
        console.log('Need to send message: ' + userInput);
    }

  render() {
    return (
      <div className="App">
          <Chat onSend={this.handleSend}/>
      </div>
    );
  }
}

export default App;
