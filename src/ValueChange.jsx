import React, { useState } from 'react'

function ValueChange() {
    const [name,setName] =useState('Arun')
    const [names,setNames]=useState([])
    function handlechange(event){
        setName(event.target.value)
    }
    function deldata(){
        setNames([... names,name])
    }
  return (
    <div>
<h1>{name}</h1>

<input onChange={handlechange} />
<button onClick={deldata} >submit</button>




{
    names.map(
        (n)=><h2>{n}</h2>
        )
}




    </div>
  )
}

export default ValueChange