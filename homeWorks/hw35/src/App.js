import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { text: 'Learn Java Script', completed: false },
    { text: 'Learn React ^-^', completed: false },
    { text: 'Build a Todo App', completed: true },
    { text: 'Deploy to GitHub', completed: true }
  ]);
  const [newTodo, setNewTodo] = useState('');

  const handleToggle = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() === '') return;
    setTodos([...todos, { text: newTodo, completed: false }]);
    setNewTodo('');
  };

  const sortedTodos = todos.sort((a, b) => a.completed - b.completed);

  return (
    <div className="App">
      <h1>Todo List</h1>
      <ul>
        {sortedTodos.map((todo, index) => (
          <li
            key={index}
            onClick={() => handleToggle(index)}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a new todo"
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default App;
