import React, {useState} from 'react'
import TaskForm from "./Todo/task_form";

import "./reset.css";
import './index.css';
import {TaskContainer} from "./Todo/task_container";


export let tasks = [{taskName: "first", taskState: "active", id: "123"},
    {taskName: "second", taskState: "active", id: "23"}]


function App() {
    let [state, setState] = useState(tasks);

    return (
        <div className="wrapper">
            <div className="inner">
                <TaskForm/>
                <TaskContainer tasks={state}/>
            </div>
        </div>
    );
}


export default App;
