import { useState } from "react";
import "./style.css";

const TempControl = () => {
  const [count, setCount] = useState(10);
//useeffect


  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className="temperature-display" style={{ backgroundColor: count > 0 ? 'red': 'blue'  }}>
          {count}°C
        </div>
      </div>
      
      <div className="button-container">
        <button onClick={() => count>0 && setCount(count-1)}> - </button>
        <button onClick={() => setCount(count+1)}> + </button>
      </div>
    </div>
  )
}

export default TempControl;