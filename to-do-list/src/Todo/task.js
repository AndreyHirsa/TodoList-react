import React from 'react'


export function Task(props){
    return(
        <div className="task">
            <span>{props.index+1}</span>
            <span>{props.task.taskName}</span>
        </div>
    )
}