import React from 'react'

export default function ProgressTracker({ tasks }) {
  const completedTasks = tasks.filter((t) => t.completed).length
  const totaltasks = tasks.length;
  const percentage = totaltasks === 0 ? 0 : Math.round((completedTasks / totaltasks) * 100);

  return (
    <div className='progress-tracker'>
      <p>
        {completedTasks} of {totaltasks} tasks completed — {percentage}%
      </p>
      <div className='progress-bar'>
        <div className='progress' style={{ width: `${percentage}%` }}>
        </div>
      </div>
    </div>
  )
}
