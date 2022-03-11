import React, { useState } from "react";
import './styles.css';
import ClearIcon from '@mui/icons-material/Clear';



function Item(props){

    const [done, setDone] = useState(false);
   
    function toggleDone(event){
        if(done){
            event.target.style.textDecoration='none'
        setDone(false)} else{
            event.target.style.textDecoration='line-through'
            setDone(true)
        }
        
    }

    function handleClick(){
        props.deleteItem(props.id)
    }



    return(
        <div className="item">
        <li title={props.text} onClick={toggleDone}>{props.text}</li>
        <ClearIcon onClick={handleClick} className="delete" />
        </div>
        
    )
}

export default Item;



