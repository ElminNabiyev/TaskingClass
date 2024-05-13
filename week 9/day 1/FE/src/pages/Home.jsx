import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const [datas, setDatas] = useState([])

  async function getDatas() {
    const res = await fetch("http://localhost:3000/elmin")
    const data = await res.json()
    setDatas(data)
  }
  useEffect(() => {
    getDatas()
  }, [])
  return (
    <>
      {datas.map(x =>
        <div>
          <img src={x.img} alt="" />
          <h1>{x.name} {x.surname}</h1>
          <p>AGE:{x.age}</p>
          <button>Add to Basket</button>
          <button><Link to={`/detail/${x._id}`}>Go to Detail</Link></button>
        </div>
      )}
    </>
  )
}

export default Home
