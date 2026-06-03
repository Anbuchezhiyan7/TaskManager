import React, { useEffect, useState } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import ProgressTracker from './components/ProgressTracker'
import './Style.css'

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  })

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  const addTask = (task) => {
    setTasks([...tasks, task])
  }

  const updateTask = (updatedTask, index) => {
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    setTasks(newtask);
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index))
  }

  const clearTasks = () => {
    setTasks([]);
  }

  return (
    <div className='App'>
      <header>
        <h1 className='title'>TaskFlow</h1>
        <p className='tagline'>Organize your day, effortlessly.</p>
      </header>

      <TaskForm addTask={addTask} />

      {tasks.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">✨</div>
          <p>No tasks yet — add one above to get started!</p>
        </div>
      ) : (
        <>
          <TaskList
            tasks={tasks}
            updateTask={updateTask}
            deleteTask={deleteTask}
          />
          <ProgressTracker tasks={tasks} />
          <button className='clear-btn' onClick={clearTasks}>
            Clear All Tasks
          </button>
        </>
      )}
    </div>
  )
}
