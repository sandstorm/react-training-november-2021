import React from 'react';
import Accordeon from './aufgaben/Accordeon/Accordeon';
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
      <Accordeon title="Aufgabe 1: Props, JSX-Comments, Fragments, Listen-Rendering">
        <ComponentWithFragment title={'MyTitle'} />
        <List items={listOfStrings} />
      </Accordeon>

      <Accordeon title="Aufgabe 2: Children as Props">
        <ComponentWithChildren>
          <p>Children1</p>
          <p>Children2</p>
          <p>Children3</p>
        </ComponentWithChildren>
      </Accordeon>

      <Accordeon title="Aufgabe 3: useState() Counter">
        <Counter step={10} />
      </Accordeon>

      <Accordeon title="Aufgabe 4: custom Hook() Counter">
        <CounterWithCustomHook step={10} />
      </Accordeon>

      <Accordeon title="Aufgabe 5 & 6: TodoList: useEffect(), API calls & Controlled Inputs">
        <TodoList url="https://jsonplaceholder.typicode.com/todos" />
      </Accordeon>

    </div>
  );
}

export default App;
