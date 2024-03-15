import { useState } from 'react';
import './App.css';
import React from 'react';
import Header from './components/Header.js';
import Form from './components/Form.js';
import TodoList from './components/TodoList.js';

function App() {
  const [input, setinput] = useState("");
  const [todos, settodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  return (
    <div className='container'>
      <div className='app-wrapper'>
        <Header />
        <Form
          input={input}
          setinput={setinput}
          todos={todos}
          settodos={settodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />
        <TodoList todos={todos} settodos={settodos} setEditTodo={setEditTodo} />
      </div>
    </div>
  );
}

export default App;
