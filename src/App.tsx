import React from 'react';
import Hello from './components/Hello';
import Name from './components/Name';
import Message from './components/Message';
import Parent from './components/ContainerSample';
import Page from './components/ContextSample';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Hello />
      <Name />
      <Message />
      <Parent />
      <Page />
      <Counter initialValue={0} />
    </div>
  );
}

export default App;
