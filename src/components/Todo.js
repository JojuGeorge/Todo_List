import React, { useState } from 'react'
import TodoStyles from './Todo.module.css'


function Todo({todoItem, completedTodoItem, deleteTodoItem, editTodoItem}) {
    const {task, id, completed} = todoItem;

    const [todoTask, setTodoTask] = useState(task)
    const [editing, setEditing] = useState(false)

    const handleCompleted = ()=>{
        completedTodoItem(id)
    }

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
                 <span className={completed ? TodoStyles.completed +" "+ TodoStyles.todoItem: TodoStyles.todoItem} onClick={handleCompleted}>{task} </span>
                 <input type="checkbox" checked={completed} onChange={handleCompleted}/>
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