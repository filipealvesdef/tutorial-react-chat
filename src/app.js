import React from 'react';

import { Chat, ChatMessage } from './chat.js';

import './app.css';

function App() {
    return <Chat>
        <ChatMessage fromMe>
          Hi.
        </ChatMessage>
        <ChatMessage>
          Hello.
        </ChatMessage>
        <ChatMessage fromMe>
          How are you?
        </ChatMessage>
        <ChatMessage>
          I'm good. How about you?
        </ChatMessage>
        <ChatMessage fromMe>
          I'm fine.
        </ChatMessage>
        <ChatMessage>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a sem lacinia, placerat metus non, lobortis lectus. Morbi efficitur sem nec ex placerat, tempus suscipit tellus venenatis. Donec convallis felis nec nibh dictum, eget posuere nisi laoreet. In at dolor lorem. Suspendisse nec nulla id justo accumsan porta at ac nunc. Duis sodales nisl eu elementum accumsan. Sed lacinia sollicitudin massa, in congue metus malesuada a. Nam convallis vulputate erat, ac vehicula risus laoreet nec. Nam viverra laoreet egestas. Integer volutpat semper nunc.
        </ChatMessage>
        <ChatMessage fromMe>
           Integer consequat efficitur pretium. Donec cursus, nisl et feugiat vehicula, lorem neque fringilla augue, quis scelerisque sapien neque scelerisque magna. Aliquam facilisis, turpis gravida luctus gravida, ipsum ex rutrum massa, quis scelerisque elit metus id lorem. Integer in aliquam est. In ultrices neque mauris, eu tristique sem eleifend commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In ac aliquam erat. Sed faucibus turpis eget elit facilisis ornare. Vestibulum sem magna, pulvinar sit amet magna id, ultrices convallis nulla. Duis lorem urna, varius in fringilla et, aliquam et lorem. In et feugiat urna. Mauris venenatis consectetur eros at efficitur. Nullam ut faucibus erat. Cras congue a arcu a blandit.
        </ChatMessage>
        <ChatMessage fromMe>
           Integer consequat efficitur pretium. Donec cursus, nisl et feugiat vehicula, lorem neque fringilla augue, quis scelerisque sapien neque scelerisque magna. Aliquam facilisis, turpis gravida luctus gravida, ipsum ex rutrum massa, quis scelerisque elit metus id lorem. Integer in aliquam est. In ultrices neque mauris, eu tristique sem eleifend commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In ac aliquam erat. Sed faucibus turpis eget elit facilisis ornare. Vestibulum sem magna, pulvinar sit amet magna id, ultrices convallis nulla. Duis lorem urna, varius in fringilla et, aliquam et lorem. In et feugiat urna. Mauris venenatis consectetur eros at efficitur. Nullam ut faucibus erat. Cras congue a arcu a blandit.
        </ChatMessage>
    </Chat>;
}

export default App;
