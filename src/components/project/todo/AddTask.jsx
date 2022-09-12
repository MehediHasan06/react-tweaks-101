
export default function AddTask(props) {
  const {setInputValue, addEnterHandler, inputValue, addHandler} = props;

  return (
    <div className='addTask'>
      <input 
        onChange = {(event) => setInputValue(event.target.value)}
        onKeyPress = {(event) => addEnterHandler(event.key)} 
        value = {inputValue}
      />
      <button onClick={addHandler}>Add Task</button>
    </div>
  );
};
