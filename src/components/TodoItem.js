import React from 'react';

const TodoItem = ({ todo, onDelete }) => (
  <div className="flex items-center justify-between bg-white p-2 my-2 shadow">
    <span>{todo}</span>
    <button onClick={onDelete} className="text-red-500">
      Delete
    </button>
  </div>
);

export default TodoItem;
