import React, { useState } from 'react'

function Fd() {
 const [name,setName]= useState('Arun N')
 const [names,setNames] =useState([])
 function handlechange(event){
    setName(event.target.value)
 }
 function data(){
    setNames([... names, name])
 }

  return (
    <>

<h1>{name}</h1>
<input onChange={handlechange} />


<button onClick={data}>submit</button>



{
    names.map((n)=><h1>{n}</h1>)
}


    </>
  )
}

export default Fd