import React, {useState} from 'react'
import TaskForm from "./Todo/task_form";
import TaskContainer from "./Todo/task_container";


function App() {

    const [inputText, setInputText] = useState("");

    const [todos,setTodos]=useState([])

    return (
        <div className="wrapper">
            <div className="inner">
                <TaskForm todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}/>
                <TaskContainer setTodos={setTodos} todos={todos}/>
            </div>
        </div>
    );
}


export default App;
