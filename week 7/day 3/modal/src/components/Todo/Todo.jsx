import React, { useState } from 'react'

function Todo() {
    const [inp,setInp]=useState("")
    const [todo,setTodo]=useState([])
    
    function getTodo() {
        setTodo([...todo,inp])
        setInp("")
    }
  return (
    <div>
      <input value={inp} onChange={(e)=>setInp(e.target.value)} type="text" />
      <button onClick={getTodo}>Add</button>
      <div>
        {todo.map((x)=><h2>{x}</h2>)}
      </div>
    </div>
  )
}

export default Todo
