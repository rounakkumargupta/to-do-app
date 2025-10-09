import React, {useState} from "react"
import './index.css'

function ToDoList() {
    const [tasks, setTasks] = useState(['Add New Tasks']);
    const [newTask, setNewTask] = useState('');
    
    function handleInputChange(event){
        setNewTask(event.target.value);
    }
    function addTask(){
        if(newTask.trim() !== ''){
            setTasks(t => [...t, newTask]);
            setNewTask('');
        }
    }
    function removeTask(index){
        const updatedTasks = tasks.filter((element, i) => i !== index);
        setTasks(updatedTasks);
    }
    function moveTaskUp(index){
        if (index > 0) {
            const uT = [...tasks];
            [uT[index], uT[index - 1]] = [uT[index - 1], uT[index]];
            setTasks(uT);
        }
    }
    function moveTaskDown(index){
        if (index < tasks.length - 1) {
            const uT = [...tasks];
            [uT[index], uT[index + 1]] = [uT[index + 1], uT[index]];
            setTasks(uT);
        }
    }
    return(
        <div className="to-do-window">
            <h2>To Do App</h2>
            <div>
                <input type="text" placeholder="Enter task here..." value={newTask} onChange={handleInputChange}/>
                <button className="addBtn" onClick={addTask}>
                    Add
                </button>
            </div>

            <ol>
                {tasks.map((task, index) => 
                    <li key={index}>
                        <span>{task}</span>
                        <div className="btns">
                            <button className="delete" onClick={() => removeTask(index)}>Delete</button>
                            <button className="move" onClick={() => moveTaskUp(index)}>Up</button>
                            <button className="move" onClick={() => moveTaskDown(index)}>Down</button>
                        </div>
                    </li>
                )}
            </ol>
        </div>
    )
    
}
export default ToDoList