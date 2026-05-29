import React from 'react'

export default function TaskList({ tasks, updateTask, deleteTask }) {
  const toggleComplete = (index) => {
    const updatedTask = { ...tasks[index], completed: !tasks[index].completed };
    updateTask(updatedTask, index);
  }

  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'High': return 'priority-high';
      case 'Medium': return 'priority-medium';
      case 'Low': return 'priority-low';
      default: return '';
    }
  }

  return (
    <ul className='task-list'>
      {tasks.map((task, index) => (
        <li key={index} className={task.completed ? 'completed' : ''}>
          <div>
            <span>{task.text}</span>
            <small className={getPriorityClass(task.priority)}>
              {task.priority} · {task.category}
            </small>
          </div>

          <div>
            <button onClick={() => toggleComplete(index)}>
              {task.completed ? "✓ Done" : "Complete"}
            </button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  )
}
