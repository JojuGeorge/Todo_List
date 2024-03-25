import React from 'react'

function Todo({todoItem}) {
    const {task, id, completed} = todoItem;

  return (

    <div>
        <div>
          <span>{task} </span>
          <button>Edit</button>
          <button>Delete</button>
        </div>
    </div>
  )
}

export default Todo