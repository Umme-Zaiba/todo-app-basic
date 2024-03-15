import React, { useEffect } from 'react'
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setinput, todos, settodos, editTodo, setEditTodo }) => {

    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map((todo) =>
            todo.id === id ? { ...todo, title, completed } : todo
        );
        settodos(newTodo);
        setEditTodo("");
    };
    useEffect(() => {
        if (editTodo) {
            setinput(editTodo.title);
        } else {
            setinput("");
        }
    }, [editTodo, setinput]);

    const onInputChange = (event) => {
        setinput(event.target.value);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (!editTodo) {
            settodos([...todos, { id: uuidv4(), title: input, complete: false }]);
            setinput("");
        } else {
            updateTodo(input, editTodo.id, editTodo.completed);
        }

    };
    return (
        <form onSubmit={onFormSubmit}>
            <input type='text'
                placeholder='Enter a task....'
                className='task-input'
                value={input}
                required
                onChange={onInputChange}
            />
            <button className='button-add' type='submit'>
                {editTodo ?  "OK": "Add"}
            </button>
        </form>
    )
}

export default Form
