import React from 'react'
import TodoItem from './TodoItem';
const Todos = (props) => {
    return (
        <div>
            <h3 className='text-center my-3'><b>Todos List Here</b></h3>
            {
                props.todos.length===0 ?<> <div className='container'>No todos to display </div></>:
                props.todos.map((todo_array) => {
                    return  <TodoItem todoarray = {todo_array} Ondelete = {props.Ondelete}/>
                })
            }
        </div >
    )
}

export default Todos