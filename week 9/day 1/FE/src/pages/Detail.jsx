import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

function Detail() {
  const [datas, setDatas] = useState([])
  const { id } = useParams()

  async function getById() {
    const res = await fetch("http://localhost:3000/elmin/" + id)
    const data = await res.json()
    setDatas(data)
  }
  useEffect(() => {
    getById()
  }, [])
  return (
    <div>
      <img src={datas.img} alt="" />
      <h1>{datas.name} {datas.surname}</h1>
      <p>AGE:{datas.age}</p>
    </div>
  )
}

export default Detail
