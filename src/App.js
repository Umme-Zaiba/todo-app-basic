import { useState } from 'react';
import './App.css';
import React from 'react';
import Header from './components/Header.js';
import Form from './components/Form.js';
import TodoList from './components/TodoList.js';
function App() {
  const [input, setinput]=useState("");
  const [todos, settodos]=useState([]);
  return (
    <div className='container'>
      <div className='app-wrapper'>
        <div>
             <Header /> 
             <div>
              <Form 
                input={input}
                setinput={setinput}
                todos={todos}
                settodos={settodos}
              />
             </div>
             <div>
              <TodoList todos={todos} settodos={settodos}/>
             </div>
        </div>
      </div>
    </div>
  );
}

export default App;
