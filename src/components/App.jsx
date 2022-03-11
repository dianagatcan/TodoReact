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

    function removeItem(id){

        setTodos(todos.filter((todo,index) =>{
            return id !== index
        }))

    }

    return(
    <div className="container">
        <h1 className="heading"><u>Todo List</u></h1>
        <Input receivedFunction={sendToInput} />
        <ul>
        {todos.map((todo, index)=>{
            return <Item deleteItem={removeItem} key={index} id={index} text={todo}/>
        })}
        </ul>
    </div>)
}

export default App;