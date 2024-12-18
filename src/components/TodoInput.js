import React, { useState } from 'react';

const TodoInput = ({ onAdd }) => {
  const [task, setTask] = useState('');

  const handleAdd = () => {
    if (task) {
      onAdd(task);
      setTask('');
    }
  };

  return (
    <div className="flex items-center my-4">
      <input
        type="text"
        className="border p-2 flex-grow"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAdd} className="bg-green-500 text-white p-2 ml-2">
        Add
      </button>
    </div>
  );
};

export default TodoInput;
