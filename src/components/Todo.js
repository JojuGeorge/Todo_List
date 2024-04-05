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

        if(todoTask !== ""){
            console.log(todoTask)
            editTodoItem({todoTask, id})
        }
        else{
            setTodoTask(task)
            editTodoItem({todoTask:task, id})
            console.log("Empty save not possible", task)
        }
    }


  return (

    <div>
        <div> 
            {!editing ? (
            <div className={TodoStyles.Todo}>
                 <span className={completed ? TodoStyles.completed +" "+ TodoStyles.todoItem: TodoStyles.todoItem} onClick={handleCompleted}>{task} </span>
                 <span>
                    {/* <input type="checkbox" checked={completed} onChange={handleCompleted}/> */}
                   <span className={TodoStyles.Todo_Buttons}>
                        <button onClick={handleEditItem}> 
                            <i className='fas fa-pen'/>
                        </button>
                        <button onClick={handleDeleteItem}>
                            <i className='fas fa-trash'/>
                        </button>
                    </span>
                </span>
             </div>
            ):(
                <div className={TodoStyles.Todo +" "+TodoStyles.Todo_Edit}>
                     <input type="text" value={todoTask} onChange={event => setTodoTask(event.target.value)} />
                     <span className={TodoStyles.Todo_Buttons }>
                     <button onClick={handleSaveItem}>
                        <i className='fas fa-save'/>
                     </button>
                     </span>
                </div>
            )}
           
        </div>
    </div>
  )
}

export default Todo