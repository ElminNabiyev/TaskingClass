import React, { useState } from "react";

function Xeber() {
    const [inp1,setInp1]=useState("")
    const [inp2,setInp2]=useState("")
    const [inp3,setInp3]=useState("")
    const [news,setNews]=useState([])

    function getNews() {
        setNews({inp1,inp2,inp3})
    }
  return (
    <div>
      <input onChange={(e)=>setInp1(e.target.value)} type="text" />
      <input onChange={(e)=>setInp2(e.target.value)} type="text" />
      <input onChange={(e)=>setInp3(e.target.value)} type="text" />
      <button onClick={getNews}>Add</button>
      <h2>Title:{news.inp1}</h2>
      <p>URL:{news.inp2}</p>
      <p>Parag:{news.inp3}</p>
    </div>
  );
}

export default Xeber;
