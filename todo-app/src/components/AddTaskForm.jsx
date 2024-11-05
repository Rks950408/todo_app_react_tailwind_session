// src/components/AddTaskForm.js
import React, { useState } from 'react';

const AddTaskForm = ({ addTask }) => {
  const [taskInput, setTaskInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page
    if (!taskInput) return;
    addTask(taskInput);
    setTaskInput(''); // Clear the input after adding the task
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col mt-2">
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        className="border p-2 w-full rounded-md"
        placeholder="Add a new task"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 mt-2 rounded-md"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTaskForm;
