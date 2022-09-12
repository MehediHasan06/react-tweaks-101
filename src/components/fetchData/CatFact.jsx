import { useEffect, useState } from 'react';
const axios = require('axios');

export default function CatFact() {
  const [fact, setFact] = useState("");

  const triggerFact = () => {
    axios.get("https://catfact.ninja/fact")
      .then(res => setFact(res.data.fact))
  };
  useEffect(() => {
    triggerFact();
  }, []);
  

  return (
    <>
      <button onClick={triggerFact}>Generate Cat Fact</button>
      <p>{fact}</p>
    </>
  )
}
