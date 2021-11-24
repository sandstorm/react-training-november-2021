import React from 'react';
import ComponentWithChildren from './aufgaben/ComponentWithChildren';
import ComponentWithFragment from './aufgaben/ComponentWithFragment';
import Counter from './aufgaben/Counter';
import CounterWithCustomHook from './aufgaben/CounterWithCustomHook';
import List from './aufgaben/List';
import TodoList from './aufgaben/TodoList/TodoList';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import './App.css';

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
    <div className="app">
      <BrowserRouter>

        <aside>
          <nav>
            <ul>
              <li><Link to="/aufgabe1">Aufgabe 1: Props, JSX-Comments, Fragments, Listen-Rendering</Link></li>
              <li><Link to="/aufgabe2">Aufgabe 2: Children as Props</Link></li>
              <li><Link to="/aufgabe3">Aufgabe 3: useState() Counter</Link></li>
              <li><Link to="/aufgabe4">Aufgabe 4: custom Hook() Counter</Link></li>
              <li><Link to="/aufgabe5">Aufgabe 5 & 6: TodoList: useEffect(), API calls & Controlled Inputs</Link></li>
            </ul>
          </nav>
        </aside>

        <main>
          <Routes>
            <Route path="/" element={<p>Select an exercise from the nav on the left.</p>} />
            
            <Route
              path="/aufgabe1" 
              element={
                <>
                  <ComponentWithFragment title={'MyTitle'} />
                  <List items={listOfStrings} />
                </>
              } 
            />

            <Route
              path="/aufgabe2"
              element={
                  <ComponentWithChildren>
                    <p>Children1</p>
                    <p>
                      Children2</p>
                    <p>Children3</p>
                  </ComponentWithChildren>
              }
            />

            <Route
              path="/aufgabe3"
              element={
                  <Counter step={10} />
              }
            />

            <Route
              path="/aufgabe4"
              element={
                  <CounterWithCustomHook step={10} />
              }
            />

            <Route
              path="/aufgabe5"
              element={
                  <TodoList url="https://jsonplaceholder.typicode.com/todos" />
              }
            />

          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
