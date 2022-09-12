import { useState } from 'react';

function ColorChnager() {  
  const [textColor, setTextColor] = useState("red");

  return (
    <div>
      <button 
        onClick={() => setTextColor("green")}
      >Make it green</button>
      {<h1 style={{ color: textColor }}>My Name is Mehedi Hasan</h1>} 
    </div>
  )
}

export default ColorChnager;