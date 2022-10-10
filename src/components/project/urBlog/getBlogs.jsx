import { useEffect, useState } from "react";
const GetBlog = () => {
  const [name, setName] = useState('mehedi');
  useEffect(() => {
    console.log("getting started !!!");
  },[name]); 

  return(
    <div className="get_blogs">
      <p>{name}</p>
      <button className="changeName" onClick={() => setName('hasan')}>Change name</button>
    </div>
  )
}

export default GetBlog;