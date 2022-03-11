import React, { useState } from "react";
import Input from "./Input/Input";
import Item from "./Item/Item";
import './styles.css'

function App(){
    const[todos, setTodos] = useState([]);

    function sendToInput(todo){
        setTodos(prevValue => {
            return [...prevValue, todo]
        })
    }


    return(
    <div className="container">
        <h1 class="heading"><u>Todo List</u></h1>
        <Input receivedFunction={sendToInput} />
        <ul>
        {todos.map((todo, index)=>{
            return <Item key={index} text={todo}/>
        })}
        </ul>
    </div>)
}

export default App;