import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'

function Datas({data,setVeri,getProducts}) {
    return (
     <Card data={data} setVeri={setVeri}></Card>
    )
}

export default Datas
