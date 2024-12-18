import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (task) => {
    setTodos([...todos, task]);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="container mx-auto p-4">
      <Header />
      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
  );
}

export default App;
