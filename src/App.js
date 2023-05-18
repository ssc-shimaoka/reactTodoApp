import './App.css';
import {useState, useRef} from "react";
import TodoList from './TodoList';
import {v4 as uuidv4} from "uuid";

function App() {
  // Todoリスト定義
  const [todos, setTodos] = useState([]);
  // 名前欄の入力文字取得用の変数定義
  const todoNameRef = useRef();

  /**
   * タスク追加関数
   */
  const handleAddTodo = () => {
    //タスクを追加
    //console.log(todoNameRef.current.value);
    const name = todoNameRef.current.value;
    if(name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, {id: uuidv4(), name: name, completed: false}];
    });
    todoNameRef.current.value = null;
  };

  /**
   * タスク　完了チェック状態変更関数
   */
  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  /**
   * 完了タスク削除関数
   * 未完了のタスクのみの新しいリストを作成し、表示反映
   */
  const handleClrar = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  // 表示出力
  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input type="text" ref={todoNameRef} />
      <button onClick={handleAddTodo}>タスクを追加</button>
      <button onClick={handleClrar}>完了したタスクの削除</button>
      <div>残りのタスク:{todos.filter((todo) => !todo.completed).length}</div>
    </>
  );
}

export default App;
