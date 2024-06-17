import React from 'react'

function Users() {
    const users =[{
        name:"parugandi",
        age:25,
       
    }
,
{
    name:'austine',
    age:25,
}
,
{
    name:'gokul',
    age:17
}
]
  return (
    <>


{
    users.map((user)=><div><h1 style={{color:'red',font:800, 
    fontSize:50}}>{user.name}</h1> <h3  style={{color:'green',fontSize:40}}>{user.age>=18&&<h4>adult</h4>|| <h5>not adult</h5> }</h3></div>)
}







    </>
  )
}

export default Users