import React from 'react';

export const Todo = ({todo, toggleTodo}) => {

  /**
   * チェックボックス押下時のイベント
   * 押したタスクのidを引数に指定し、App.jsのtoggleTodo()を呼ぶ
   */
  const handleTodoClick = () => {
    toggleTodo(todo.id);
  };

  // 表示出力
  return (
    <div>
        <label>
            <input
             type="checkbox" 
             checked={todo.completed} 
             readOnly 
             onChange={handleTodoClick}
            />
        </label>
        {todo.name}
    </div>
  );

};

// 出力
export default Todo;
