import './App.css'; // Import CSS styles for the application
import { useState } from 'react'; // Import useState hook for state management
import Task from './Task';


function App() {
  
  // Define local state variables
  const [todoList, setTodoList] = useState([]); // Array of task objects
  const [newTask, setNewTask] = useState(); // Value of new task input field

  // Handle input field changes
  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  // Add a new task to the to-do list
  const addTask = () => {
    const task = { // Create a new task object
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1, // Assign unique ID
      taskName: newTask, 
      completed:false,
      // Set task name from input field
    }
    setTodoList([...todoList, task]); // Add task to to-do list state variable
    setNewTask(''); // Clear new task input field
  };

  // Delete a task from the to-do list
  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id)); // Filter out task with specified ID
  };

  // Mark a task as completed
  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => { // Map over to-do list items
        if (task.id === id) { // Check if task ID matches
          return {...task, completed: true}; // Update completion status for matching task
        } else {
          return task; // Return original task for non-matching tasks
        }
      })
    );
  };

  // Render the to-do list application
  return (
    // Main container for the application
    <div className="App"> 
    {/* Add task section */}
      <div className="addTask"> 
        <h1>ToDo List</h1> 
        <input id="newTask" onChange={handleChange} placeholder="Add Task" value={newTask} /> 
        {/* // Input field for new task */}
        <button onClick={addTask}>Add Task</button> 
        {/* Button to add the new task */}
      </div>
      <div className="list"> 
      {/* // List of tasks */}
        {todoList.map((task) => { // Map over to-do list items
          return (
           <Task id={task.id} taskName={task.taskName} completed={task.completed} deleteTask={deleteTask} completeTask={completeTask} />
          );
        })}
      </div>

    </div>
  );
}

export default App;