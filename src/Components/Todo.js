import React from 'react';

const Todo = ({id, name, completed, checkTodo, deleteTodo}) => {  //inherits all the parent method props
  return (   <li>
    <input 
      type="checkbox" 
      checked={completed} 
      onChange={() => checkTodo(id, completed)}/>
    <span 
      style= {{
       textDecoration: completed ? "line-through" : "none", 
       }}
    >
      {name}
    </span>
    <button onClick={() => deleteTodo(id)}>Delete</button>
  </li>)
};

export default Todo;