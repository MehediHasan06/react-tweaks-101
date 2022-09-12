import axios from 'axios';
import React, { useState } from 'react';

export default function PredictAge() {
  const [name, setName] = useState("");
  const [age, setAge] = useState({});

  const getAge = () => {
    axios.get(`https://api.agify.io?name=${name}`)
      .then(res => setAge(res.data));

  };
  return (
    <div>
      <input value={name} type="text" onChange={(event) => setName(event.target.value)}/>
      <button onClick={getAge}>Get the age</button>
      <p>{age?.age}</p>
      <p>{age?.name}</p>
      <p>{age?.count}</p>
    </div>
  )
}
