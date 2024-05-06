import { useState } from 'react';
import "./App.css"
import TodoList from './TodoList';
import TodoInput from './TodoInput';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const changeColor = () => {
    if (document.body.style.backgroundColor === 'black') {
      document.body.style.backgroundColor = 'bisque';
    } else {
      document.body.style.backgroundColor = 'black';
    }
  }
  const addTodo = () => {
    if (todo !== "") setTodos([...todos, todo]);
    setTodo("");
  }
  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text;
    });
    setTodos(newTodos);
  };

  return (
    <div>
      <button className='light-button' onClick={changeColor}>Toggle light mode</button>
      <div className="App">
        <h1>Todo App</h1>
        <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} />
        <TodoList list={todos} remove={deleteTodo} />
      </div>
    </div>
  );
}

export default App;
