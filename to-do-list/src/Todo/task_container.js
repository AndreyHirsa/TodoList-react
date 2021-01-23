import React from 'react'
import {Task} from "./task";

export function TaskContainer(props){
    return(
        <div className="tasks_container">
            {props.tasks.map((task,index)=>{
                return <Task task={task} index={index} key={task.id}/>
            })}
        </div>
    )
}