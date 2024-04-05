import React,{useState, useRef, useEffect} from 'react'
import {v4 as uuid} from "uuid";
import NewTodoStyles from './NewTodo.module.css'

function NewTodo({newTodo}) {

    const [todoItem, setTodoItem] = useState("");
    const inputRef = useRef();

    useEffect(()=>{
        inputRef.current.focus();
    })

    const handleAddNewTodo = (event)=>{
        event.preventDefault();
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
        <form className={NewTodoStyles.NewTodo_Form}>
            <label>New Todo</label>
            <input type="text" ref={inputRef} value={todoItem} onChange={event => setTodoItem(event.target.value)}/>
            <button onClick={(e)=>handleAddNewTodo(e)}>Add</button>
        </form>
    </div>
  )
}

export default NewTodo