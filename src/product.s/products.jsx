import React, { useState } from 'react'

function Products() {
    const [tasks,settask]=useState(['task1'])
    const [inputvalue,setIputvalue]=useState('')
    function addData(){
        if (inputvalue.length===0){
            return;
        }
      settask([
        ... tasks,
        inputvalue
      ])
      setIputvalue('')
    }
    function deleteData(taskindex){
      tasks.splice(taskindex,1)
        settask(
            [...tasks,

                {
                    content:inputvalue,
                    iscomplete:false

                }
            ]
        )

    }
    function marKcompleted(taskindex){
tasks[taskindex]
    }
  return (
    <div>
    <h1>Task Manager</h1>
<div>{
    tasks.map((task,index)=><div>
    <input type="checkbox" value={iscomplete} onChange={()=>marKcompleted(index)} />
    {index}.
    {task.content}
    {''}
    <button onClick={()=>deleteData(task)}>Delete</button>
    
    </div>)
}

</div>


<div>
    <input value={inputvalue} onChange={(event)=>setIputvalue(event.target.value)}/>
    <button onClick={addData} >Submit</button>
</div>
    </div>
  )
}

export default Products