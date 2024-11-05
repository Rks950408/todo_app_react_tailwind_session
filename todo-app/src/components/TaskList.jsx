import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <ul className="mt-4">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </ul>
  );
};

export default TaskList;
