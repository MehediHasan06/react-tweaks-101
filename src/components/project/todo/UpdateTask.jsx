import React from 'react';

export default function UpdateTask(props) {
  const {id, updateTask, completed} = props;

  return (
    <div>
      <button 
        onClick={() => updateTask(id)}
        style={{ background:completed ? 'green': '' }}
      >Complete</button>
    </div>
  );
};
