import React from 'react'
import {Render} from "./render";


export default function TaskForm(){

    return(
        <form onSubmit={Render} className="task_form" action="">
            <input  className="task_name" type="text"/>
            <button className="button__add" type="submit">Add</button>
        </form>
    )
}