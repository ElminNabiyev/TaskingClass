import React from 'react'

function Card({data,setVeri,getProducts}) {
    async function deleteData(id) {
        const res=await fetch(`https://northwind.vercel.app/api/categories/`+ id,{method:"DELETE"})
        const data=await res.json()
        await  getProducts()
        return data
    }
    return (
        <div className='datas'>
            <ul>
                {data && data.map(x => (<div><li key={x.id}>{x.name}|{x.unitPrice}$</li><button onClick={()=>deleteData(x.id)}>X</button></div>))}
            </ul>
        </div>
    )
}

export default Card
