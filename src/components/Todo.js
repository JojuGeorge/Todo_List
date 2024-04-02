import React, { useState } from 'react'

function Todo({todoItem, deleteTodoItem, editTodoItem}) {
    const {task, id, completed} = todoItem;

    const [todoTask, setTodoTask] = useState(task)
    const [editing, setEditing] = useState(false)

    const handleDeleteItem = ()=>{
        deleteTodoItem(id)
    }

    const handleEditItem = ()=>{
        setEditing(true)
    }

    const handleSaveItem = ()=>{
        setEditing(false)
        editTodoItem({todoTask, id})
    }


  return (

    <div>
        <div> 
            {!editing ? (
            <div>
                 <span>{task} </span>
                 <button onClick={handleEditItem}>Edit</button>
                 <button onClick={handleDeleteItem}>Delete</button>
             </div>
            ):(
                <div>
                     <input type="text" value={todoTask} onChange={event => setTodoTask(event.target.value)} />
                     <button onClick={handleSaveItem}>Save</button>
                </div>
            )}
           
        </div>
    </div>
  )
}

export default Todo