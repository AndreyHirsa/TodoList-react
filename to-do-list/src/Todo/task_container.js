import React from 'react'
import {Task} from "./task";

export default function TaskContainer({todos,setTodos}){
    
    return(
        <div className="tasks_container">
            {todos.map((todo,index)=>(
                   <Task setTodos={setTodos} todo={todo} todos={todos} text={todo.text} key={todo.id} index={index}/>
            ))}
        </div>
    )
}