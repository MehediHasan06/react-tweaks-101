import React from 'react';
import { DeleteTask } from './DeleteTask';
import UpdateTask from './UpdateTask';

export default function TaskList(props) {
  const {taskList, removeHandler, updateHandler} = props;

  return (
    <div className='listTask'>
      {
        taskList.map((task) => {
          return (
            <div key={task.id}>
              <p>{task.taskName}</p>
              <DeleteTask                 
                id={task.id} 
                deleteTask={removeHandler}                
              />
              <UpdateTask
                id={task.id}
                updateTask={updateHandler}
                completed={task.completed}
              />
            </div>
            
          )
        })
      }
    </div>
  );
};
