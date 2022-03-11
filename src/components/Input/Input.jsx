import React, { useState } from "react";
import './styles.css';

function Input(props){
    /**
     * 
     * @param {KeyboardEvent} event 
     */

    const [todo, setTodo]=useState("")


    function handleKeyPress(event){
        if(event.key === "Enter"){
            props.receivedFunction(todo)
            setTodo("")
        }
    }

    function handleChange(event){
        setTodo(event.target.value)
    }

    return(
        <div className="form">
             <input value={todo} onChange={handleChange} onKeyPress={(e)=>handleKeyPress(e)} type="text" placeholder="What needs to be done?"></input>
        </div>
    )
}

export default Input;