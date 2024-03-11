import React from 'react'
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setinput, todos, settodos }) => {
    const onInputChange = (event) => {
        setinput(event.target.value);
    };
    const onFormSubmit = (event) => {
        event.preventDefault();
        settodos([...todos,{id:uuidv4(), title:input, complete:false}]);
        setinput("");
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
            <button className='button-add' type='submit'>Add</button>
        </form>
    )
}

export default Form
