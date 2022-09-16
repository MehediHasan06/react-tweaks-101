import { useEffect, useState } from "react";
import "./style.css";

const TempControl = () => {
  const [count, setCount] = useState(24);
  const [tempColor, setTempColor] = useState("");
  
  const handleTempColor = () => {
    if(count === 24){
      setTempColor("#3EB489");
    } else if(count<20){
      setTempColor("#9AFEFF");
    } else if(count>=20 && count<30){
      setTempColor("#15317E");
    } else {
      setTempColor("red");
    }
  };
  
  useEffect(() => {
    handleTempColor();
  }, [count]);

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className="temperature-display" style={{ backgroundColor: tempColor }}>
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