import React from 'react';
import Accordeon from './aufgaben/Accordeon';
import ComponentWithChildren from './aufgaben/ComponentWithChildren';
// import './App.css';
import ComponentWithFragment from './aufgaben/ComponentWithFragment';
import List from './aufgaben/List';

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
      <hr />
      <Accordeon />
    </div>
  );
}

export default App;
