import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app.js';
import * as serviceWorker from './serviceWorker';
import YBotAgent from './ybot-agent.js'

let agent = undefined;

if (process.env.REACT_APP_YBOT_ENDPOINT) {
    agent = new YBotAgent(process.env.REACT_APP_YBOT_ENDPOINT);
}

ReactDOM.render(<App agent={agent} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
