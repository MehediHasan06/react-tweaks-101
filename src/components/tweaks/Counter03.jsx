import { useState } from 'react';
function Counter() {
  let [value, setValue] = useState(0);
  const handleIncrease = () => {
    setValue(value+1);    
  };
  return (
    <div>
      <button onClick={handleIncrease}> + </button>
      <p>{value}</p>
      <button onClick={()=> value>0 && setValue(value-1)}> - </button>
    </div>
  )
}

export default Counter;
