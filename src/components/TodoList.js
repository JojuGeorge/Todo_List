import React, {useState} from 'react'
import Todo from './Todo';
import NewTodo from './NewTodo';

function TodoList() {

    const [todoItemsList, setTodoItemsList] = useState([]);

    const createTodoItem = (newTodoItem)=>{
        setTodoItemsList([...todoItemsList, newTodoItem] );
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
    <div>
        
        <div>
            {
                todoItemsList.map((todoItem,index) => 
                    <Todo 
                    key={index}
                    todoItem={todoItem}
                    deleteTodoItem = {deleteTodoItem}
                    editTodoItem = {editTodoItem}
                    />
                )
            }
        </div>

        <div>
            <NewTodo newTodo={createTodoItem}/>
        </div>
    </div>
  )
}

export default TodoList