import React, { useState } from 'react';

function Products() {
    const [tasks, setTasks] = useState([{ content: 'task1', isComplete: false }]);
    const [inputValue, setInputValue] = useState('');

    function addData() {
        if (inputValue.trim().length === 0) {
            return;
        }
        setTasks([
            ...tasks,
            { content: inputValue, isComplete: false }
        ]);
        setInputValue('');
    }

    function deleteData(taskIndex) {
        const newTasks = tasks.filter((_, index) => index !== taskIndex);
        setTasks(newTasks);
    }

    function markCompleted(taskIndex) {
        const newTasks = tasks.map((task, index) => 
            index === taskIndex ? { ...task, isComplete: !task.isComplete } : task
        );
        setTasks(newTasks);
    }

    return (
        <div>
            <h1>Task Manager</h1>
            <div>
                {tasks.map((task, index) => (
                    <div key={index}>
                        <input
                            type="checkbox"
                            checked={task.isComplete}
                            onChange={() => markCompleted(index)}
                        />
                        {index + 1}. {task.content}
                        <button onClick={() => deleteData(index)}>Delete</button>
                    </div>
                ))}
            </div>
            <div>
                <input 
                    value={inputValue} 
                    onChange={(event) => setInputValue(event.target.value)} 
                />
                <button onClick={addData}>Submit</button>
            </div>
        </div>
    );
}

export default Products;
