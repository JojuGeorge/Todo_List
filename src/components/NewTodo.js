import React,{useState} from 'react'
import {v4 as uuid} from "uuid";

function NewTodo({newTodo}) {

    const [todoItem, setTodoItem] = useState("");

    const handleAddNewTodo = ()=>{
        if(todoItem !== ""){
            newTodo({task:todoItem, id:uuid(), completed:false});
            setTodoItem("")
        }
        else{
            console.log("enter data - emtpy string")
        }
    }

  return (
    <div>
        <div>
            <p><label>New Todo</label></p>
            <input type="text" value={todoItem} onChange={event => setTodoItem(event.target.value)}/>
            <button onClick={handleAddNewTodo}>Add</button>
        </div>
    </div>
  )
}

export default NewTodo