import React, { useState } from 'react';
import { addTask } from '../../services/taskService';

const TaskForm = ({ refreshTasks }) => {
  const [task, setTask] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTask({ task });
    setTask('');
    refreshTasks();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
