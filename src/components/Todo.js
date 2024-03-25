import React from 'react'

function Todo({todoItem, deleteTodoItem}) {
    const {task, id, completed} = todoItem;

    const handleDeleteItem = ()=>{
        deleteTodoItem(id)
    }


  return (

    <div>
        <div>
          <span>{task} </span>
          <button>Edit</button>
          <button onClick={handleDeleteItem}>Delete</button>
        </div>
    </div>
  )
}

export default Todo