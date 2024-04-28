import React from 'react';
import Todo from "./Todo.js";   //grabs the Todos

const TodoList = ({todos, checkTodo, deleteTodo}) => {  //accepts the Todo prop which is an array of todos; has the other props passed down
  return (
    <div>
        {todos.map(todo => ( //maps over each of the todos, and
        <Todo key={todo.id} {...todo} checkTodo={checkTodo} deleteTodo={deleteTodo}/>   //refers to each individually for server communication, spreads in the props for each
      ))}       
    </div>
  );
};

export default TodoList;