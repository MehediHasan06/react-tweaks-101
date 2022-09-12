import { useEffect, useState } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';

function ToDo() {
  const [taskList, setTaskList] = useState([]); 
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    console.log(taskList)
  }, [taskList]);

  const addHandler = () => {
    let newTask = {
      id: taskList.length === 0 ? 1 : taskList[taskList.length -1].id+1,
      taskName: inputValue,
      completed: false
    };
    setTaskList([...taskList, newTask]);
    setInputValue('');
  };
  const removeHandler = id => setTaskList(taskList.filter((item) => item.id !== id));
  const updateHandler = (id) => {
    setTaskList(taskList.map((task) => {
      if(task.id === id){
        return {...task, completed:true};
      } else {
        return task;
      }
    }))
  };
  const addEnterHandler = (key) => {
    if(key === "Enter"){
      addHandler();
    }
  };
  
  return (
    <div className='todo_container'>
      <AddTask
        setInputValue={setInputValue}
        addEnterHandler={addEnterHandler}
        addHandler={addHandler}
        inputValue={inputValue}
      />

      <TaskList
        taskList={taskList}
        removeHandler={removeHandler}
        updateHandler={updateHandler}        
      />
    </div>
  )
}

export default ToDo;
