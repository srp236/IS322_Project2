import React from 'react';

const TaskItem = props => {
  return (
    <div className='card-container'>
      <li className="list-group-item">
      { props.task.title }
      <button type="button"
              onClick={() => props.markDone(props.task)}
              className="btn btn-primary" style={{ float: 'right' }}>
        Done
        </button>
    </li>
    </div>
    
  )
};

export default TaskItem;