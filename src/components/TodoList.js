import React, {useState} from 'react'
import Todo from './Todo';

function TodoList() {

    const [todoItemsList, setTodoItemsList] = useState([
        {task:"read book", id:1, completed:false},
        {task:"write journal", id:2, completed:false}
    ]);
  return (
    <div>
        
        <div>
            {
                todoItemsList.map(todoItem => 
                    <Todo todoItem={todoItem}/>
                )
            }
        </div>
    </div>
  )
}

export default TodoList