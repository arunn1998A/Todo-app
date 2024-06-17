import React, { useState } from 'react'
import Fruit from './Fruit'
// import Button from './button'


function Fruits() {
  const fruits =[{name:'  Apple ',price:4},
    {name:    '        orange     '   ,price:2},
    {name: '     banana   '   ,price:1},
    {name  :  ' grape '  ,price:3},
    {name:   ' mango '  ,price:5}


  ]
  const [Number,setNumber]=useState(0)
  const handleclick=()=>{
    setNumber(Number+4)
  }
  return (

    <div> 
    <ul>
<button onMouseEnter={handleclick} >{Number}</button>
    {  fruits.map((fruit)=>(
  <Fruit key={fruit.name} name={fruit.name } price={fruit.price}  />
  
  ))}



    </ul>

    </div>

  )
}

export default Fruits