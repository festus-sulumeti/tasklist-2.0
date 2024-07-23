import React from 'react';
import TaskList from '../components/Task/TaskList';
import TaskForm from '../components/Task/TaskForm';

const HomePage = () => {
  return (
    <div>
      <h1>Task List</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default HomePage;
