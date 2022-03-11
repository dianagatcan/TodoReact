import React from "react";
import './styles.css';

function Item(props){
    return(
        <div className="item">
        <li>{props.text}</li>
        </div>
    )
}

export default Item;



