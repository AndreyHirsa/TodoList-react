import React from 'react'


export function Task({text, todos, todo, setTodos,index}) {
    function deleteTask() {
        setTodos(todos.filter(el => el.id !== todo.id))
    }

    function completeTask() {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item,completed:!item.completed
                }
            }
            return item;
        }))
    }

    return (
        <div className="task">
            <span>{index + 1}</span>
            <span className={`task_name ${todo.completed ? "completed" : ""}`}>{text}</span>
            <button  className="button__complete_task" onClick={completeTask}>
                <i className={`fas ${todo.completed ? "fa-plus" : "fa-check"} `}/>
            </button>
            <button onClick={deleteTask} className="button__delete_task">
                <i className="fas fa-times"/>
            </button>
        </div>
    )
}