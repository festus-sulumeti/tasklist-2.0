import React from 'react'

function Task(props) {
  return (
      <div className="task"
              style={{backgroundColor: props.completed ? "green" : "white"}}
            > 
            {/* // Task container with conditional */}

              <li>{props.taskName}</li>
              <button onClick={() => props.completeTask(props.id)}>Complete</button>
              <button onClick={() => props.deleteTask(props.id)}>Delete</button>
            </div>
            
  
  )
}

export default Task