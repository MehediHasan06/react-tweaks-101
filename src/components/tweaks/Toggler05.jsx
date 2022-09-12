import { useState } from 'react';

function Toggler() {
  const [text, setText] = useState(false);

  return (
    <div>
      <button 
        onClick={() => setText(!text)}
      >
        {text ? "Hide Text" : "Show Text"}
      </button>
      {text && <h1>My Name is Mehedi Hasan</h1>} 
    </div>
  )
}

export default Toggler;