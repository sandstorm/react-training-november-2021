import React from 'react';
import ComponentWithChildren from './aufgabe1/ComponentWithChildren';
// import './App.css';
import ComponentWithFragment from './aufgabe1/ComponentWithFragment';
import List from './aufgabe1/List';

const listOfStrings = [
  {
    id: 'two',
    content: 'two',
  },
  {
    id: 'one',
    content: 'one',
  },
  {
    id: 'three',
    content: 'three',
  },
  {
    id: 'four',
    content: 'four',
  },
  {
    id: 'five',
    content: 'five',
  }
]

function App() {
  return (
    <div className="App">
      <ComponentWithFragment title={'MyTitle'} />
      <hr />
      <List items={listOfStrings} />
      <hr />
       <ComponentWithChildren>
        <p>Children1</p>
        <p>Children2</p>
        <p>Children3</p>
      </ComponentWithChildren>
    </div>
  );
}

export default App;
