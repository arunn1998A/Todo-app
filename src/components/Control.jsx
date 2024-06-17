import React from 'react'
import { useState } from 'react'

function Control() {

    const [count,setCount]= useState(0)
    function handlechange(){
        setCount(count+1)
    }
  return (
    <div>

    <h1 > count value is {count}</h1>
<button onClick={handlechange} >click</button>

    
    </div>
  )
}

export default Control