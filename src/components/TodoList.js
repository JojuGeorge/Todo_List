import React, {useState} from 'react'
import Todo from './Todo';
import NewTodo from './NewTodo';
import ListStyles from './TodoList.module.css'


function TodoList() {

    const [todoItemsList, setTodoItemsList] = useState([]);

    const createTodoItem = (newTodoItem)=>{
        setTodoItemsList([...todoItemsList, newTodoItem] );
    }

    const completedTodoItem = (id)=>{
        const updatedList = todoItemsList.map(item => {
            if(item.id === id){
                return {...item, completed : !item.completed}
            }else{
                return item
            }
        })
       
        setTodoItemsList(updatedList)
    }

    const deleteTodoItem = (TodoItemId) => {
        const updatedList = todoItemsList.filter(item => {
            if(item.id !== TodoItemId)
                return item
        })
        setTodoItemsList(updatedList)
    }

    const editTodoItem = (todoItem) =>{
        const updatedList = todoItemsList.map(item => {
            if(item.id === todoItem.id){
                return {...item, task : todoItem.todoTask}
            }else{
                return item
            }
        })
       
        setTodoItemsList(updatedList)
    }

  return (
    <div className={ListStyles.TodoList}>

        <h1>Todo List</h1>
        
        <div>
            {
                todoItemsList.map((todoItem,index) => 
                    <Todo 
                    key={index}
                    todoItem={todoItem}
                    deleteTodoItem = {deleteTodoItem}
                    editTodoItem = {editTodoItem}
                    completedTodoItem = {completedTodoItem}
                    />
                )
            }
        </div>

        < div >
            <NewTodo newTodo={createTodoItem}/>
        </div>
    </div>
  )
}

export default TodoList