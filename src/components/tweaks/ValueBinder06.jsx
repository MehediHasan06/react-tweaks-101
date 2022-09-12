import { useState } from 'react';

function ValueBinder() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <input type="text" onChange={(event) => setInputValue(event.target.value)}/> 
      <p>{inputValue}</p>
    </div>
  )
}

export default ValueBinder;