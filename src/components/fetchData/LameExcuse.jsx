import axios from 'axios';
import React, { useState } from 'react';

export default function LameExcuse() {
  const [excuse, setExcuse] = useState("");
  const getExcuse = (resaon) => {
    console.log(resaon);
    axios.get(`https://excuser.herokuapp.com/v1/excuse/${resaon}/`)
      .then(res => setExcuse(res.data[0].excuse));
  };

  
  return (
    <div>
      <button onClick={()=> getExcuse("family")}>Family</button>
      <button onClick={()=> getExcuse("children")}>Children</button>
      <button onClick={()=> getExcuse("office")}>Office</button>

      <p>{excuse}</p>
    </div>
  )
}
