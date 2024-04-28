import './App.css'
import Datas from './components/Datas/Datas'
import { useEffect, useState } from 'react'
import { getDatas } from './service'

function App() {
  const [data,setVeri]=useState([])

  useEffect(()=>{
    async function getProducts() {
      const data=await getDatas()
      setVeri(data)
    }
    getProducts()
  },[])
  return (
    <>
      <Datas data={data} setVeri={setVeri} getProducts={getProducts()}></Datas>
    </>
  )
}

export default App
