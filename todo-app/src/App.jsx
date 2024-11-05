// src/App.jsx
import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm'; // Import the AddTaskForm

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  const addTask = (taskName) => {
    const newTasks = [...tasks, { id: Date.now(), name: taskName }];
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-xl font-bold">To-Do List</h1>
      <AddTaskForm addTask={addTask} /> {/* Use the AddTaskForm */}
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
