import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onDelete }) => (
  <div>
    {todos.map((todo, index) => (
      <TodoItem key={index} todo={todo} onDelete={() => onDelete(index)} />
    ))}
  </div>
);

export default TodoList;
