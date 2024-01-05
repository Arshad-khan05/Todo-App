import React from 'react'

const TodoItem = ({todoarray,Ondelete}) => {
  return (
    <div className='container pg-3'>
      <h4>{todoarray.title}</h4>
      <p>{todoarray.description}</p>
      <button className='btn btn-sm btn-danger' onClick={()=>{Ondelete(todoarray)}}>Delete</button>
      <hr/>
    </div>
  )
}

export default TodoItem
