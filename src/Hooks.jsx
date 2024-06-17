import React, { useEffect, useState } from 'react'


function Hooks() {
    const [name,SetName]=useState('')
    const [isadult, setIsAdult]=useState(false)
    const [age,setAge]=useState(0)
    // console.log();
    useEffect(() => {

    console.log('welsome');

      
    }, [])
    useEffect(() => {
        // setIsAdult(age>=18)
        console.log('hello');
    
    }, [age])
    useEffect(()=>{
        console.log('name updated');
    },[name])
    
    


  return (
    <>
<h1>age {age}</h1>
<h1>is Adult? {isadult?'yes':'No'}</h1>

Age:<input onChange={(event)=>setAge(parseInt(event.target.value))} />

<br />

Name:<input onChange={(event)=>SetName(event.target.value)} />





    </>
  )
}

export default Hooks