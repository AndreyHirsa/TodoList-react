import React from 'react'
import {tasks} from "../App"


export function Render(event){
    event.preventDefault();
    const taskName=document.querySelector(".task_name");
    const inputValue=taskName.value;
    if(inputValue.trim()){
        const task={
            taskName:inputValue,
            taskState:"active",
            id:Math.random().toFixed(5)
        }
        tasks.push(task)
    }
}






