import React from "react";
import Input from "./Input/Input";
import Item from "./Item/Item";
import './styles.css'

function App(){
    return(
    <div className="container">
        <Input />
        <Item text="Tralala"/>
    </div>)
}

export default App;