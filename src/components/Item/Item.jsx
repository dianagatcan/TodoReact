import React from "react";
import './styles.css';

function Item({text}){
    return(
        <div className="item">
        {text}
        </div>
    )
}

export default Item;



