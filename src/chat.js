import React from 'react';

import './chat.css';

function Chat() {
    return <div className='chat'>
      <div className='chat__log'>
        <div className='chat__message'>
          Hi.
        </div>
        <div className='chat__message'>
          Hello.
        </div>
        <div className='chat__message'>
          How are you?
        </div>
        <div className='chat__message'>
          I'm good. How about you?
        </div>
        <div className='chat__message'>
          I'm fine.
        </div>
      </div>
      <div className='chat__input'>
      </div>
    </div>;
}

export default Chat;
