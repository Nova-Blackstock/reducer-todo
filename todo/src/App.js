import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import { initialToDoState, reducer } from './reducers/reducer'

import ToDoList from './components/ToDoList'
import ToDoForm from './components/ToDoForm'

function App() {
  const [state, dispatch] = useReducer(reducer, initialToDoState)
  console.log(state)
  return (
    <div className="App">
      <header className="App-header">
        <p>Add a Task!</p>
      <ToDoForm 
        dispatch={dispatch}
        />
      </header>
      <ToDoList
        dispatch={dispatch}
        todos={state}
      />
    </div>
  );
}

export default App;
