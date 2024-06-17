import React, { useState } from 'react';
import App from './../App';

function Task() {
  const [tasks, setTasks] = useState([{ content: 'task1', isComplete: false, isEditing: false }]);
  const [inputValue, setInputValue] = useState('');

  function addData() {
    if (inputValue.length === 0) {
      return;
    }
    setTasks([
      ...tasks,
      { content: inputValue, isComplete: false, isEditing: false }
    ]);
    setInputValue('');
  }

  function deleteData(taskIndex) {
    const newTasks = tasks.filter((_, index) => index !== taskIndex);
    setTasks(newTasks);
  }

  function markCompleted(taskIndex) {
    const newTasks = tasks.map((task, index) => {
      if (index === taskIndex) {
        return { ...task, isComplete: !task.isComplete };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function editTask(taskIndex) {
    const newTasks = tasks.map((task, index) => {
      if (index === taskIndex) {
        return { ...task, isEditing: true };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function updateValue(taskIndex, value) {
    const newTasks = tasks.map((task, index) => {
      if (index === taskIndex) {
        return { ...task, content: value };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function saveTask(taskIndex) {
    const newTasks = tasks.map((task, index) => {
      if (index === taskIndex) {
        return { ...task, isEditing: false };
      }
      return task;
    });
    setTasks(newTasks);
  }

  return (
    <div>
      <h1  style={{color:'blue',border:'5px solid black'}} >Task Manager</h1>
  
      <div>
        {tasks.sort((a, b) => (a.isComplete ? 1 : -1)).map((task, index) => (
          <div key={index}>
            <input style={{color:'lightgreen'}}
              type="checkbox" 
              checked={task.isComplete} 
              onChange={() => markCompleted(index)} 
            />
            {task.isEditing ? (
              <span>
                <input 
                style={{color:"yellow",backgroundColor:'skyblue',border:'1px solid red'}}
                  value={task.content} 
                  onChange={(event) => updateValue(index, event.target.value)} 
                />
                <button style={{color:'green',backgroundColor:'violet'}} onClick={() => saveTask(index)}>Save</button>
              </span>
            ) : (
              <span>
                {task.isComplete ? <del>{task.content}</del> : task.content}
                <button style={{color:'darkblue',backgroundColor:"red"}} onClick={() => editTask(index)}>Edit</button>
              </span>
            )}
            <button style={{color:'yellow',backgroundColor:'blue'}}  onClick={() => deleteData(index)}>Delete</button>
          </div>
        ))}
      </div>
      <div>
        <input 
        style={{color:"21, 26, 53",backgroundColor:'lightblue'}}
          value={inputValue} 
          onChange={(event) => setInputValue(event.target.value)} 
        />
        <button style={{color:"brown",backgroundColor:'skyblue'}} onClick={addData}>Submit</button>
      </div>
    </div>
  );
}

export default Task;
