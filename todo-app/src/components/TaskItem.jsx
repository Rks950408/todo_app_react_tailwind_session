import React from 'react';

const TaskItem = ({ task, deleteTask }) => {
  return (
    <li className="flex justify-between items-center p-2 border-b">
      <span>{task.name}</span>
      <button
        onClick={() => deleteTask(task.id)}
        className="bg-red-500 text-white py-1 px-3 rounded"
      >
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
