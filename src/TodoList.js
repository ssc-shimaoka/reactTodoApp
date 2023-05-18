import React from 'react';
import Todo from './Todo';

// Todoリストコーポネント出力
const TodoList = ({todos, toggleTodo}) => {
  return todos.map((todo) => <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo}/>);
};

// 出力
export default TodoList;