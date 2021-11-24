import React from 'react';
import Accordeon from './aufgaben/Accordeon';
import ComponentWithChildren from './aufgaben/ComponentWithChildren';
// import './App.css';
import ComponentWithFragment from './aufgaben/ComponentWithFragment';
import Counter from './aufgaben/Counter';
import CounterWithCustomHook from './aufgaben/CounterWithCustomHook';
import List from './aufgaben/List';
import TodoList from './aufgaben/TodoList/TodoList';

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
      <h2>Aufgabe 1: Props, JSX-Comments, Fragments, Listen-Rendering</h2>
      <ComponentWithFragment title={'MyTitle'} />
      <hr />
      <List items={listOfStrings} />
      <hr />
      <h2>Aufgabe 2: Children as Props</h2>
       <ComponentWithChildren>
        <p>Children1</p>
        <p>Children2</p>
        <p>Children3</p>
      </ComponentWithChildren>
      <hr />
      <h2>Zusatz: Accordeon</h2>
      <Accordeon />
      <hr />
      <h2>Aufgabe 3: useState() Counter</h2>
      <Counter step={10} />
      <hr />
      <h2>Aufgabe 4: custom Hook() Counter</h2>
      <CounterWithCustomHook step={10} />
      <h2>Aufgabe 5: TodoList: useEffect() & API calls</h2>
      <TodoList url="https://jsonplaceholder.typicode.com/todos" />
    </div>
  );
}

export default App;
