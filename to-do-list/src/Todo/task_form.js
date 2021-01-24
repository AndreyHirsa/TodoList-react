import React,{useState} from 'react';



export default function TaskForm({inputText,setInputText,todos,setTodos}){
    const[buttonState,setButtonState]=useState(true);
    const inputTextHandler=(e)=>{
        const value=e.target.value;
        value.trim()?setButtonState(false):setButtonState(true);
        setInputText(value);
    }
    const submitTodoHandler=(e)=>{
        e.preventDefault();
        setTodos([
            ...todos,{text:inputText,completed:false,id:Math.random().toFixed(5)}
        ]);
        setInputText("");
        setButtonState(true);
    }
    return(
        <form className="task_form" action="">
            <input value={inputText} onChange={inputTextHandler} className="task_name" type="text"/>
            <button disabled={buttonState} onClick={submitTodoHandler} className="button__add" type="submit">Add</button>
        </form>
    )
}