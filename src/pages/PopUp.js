import React, {useState} from 'react';
import "../css/PopUp.css";
import { RxCross2 } from "react-icons/rx";

function PopUp(props){

    return(props.trigger) ? (
    <div className='popup' id='popup'>
        <div className='popup-inner'>
       <button className='close-btn' onClick={() => props.setTrigger(false)}><RxCross2  size={30}/></button>
       {props.children}
        </div>


    </div>
): "";
}

export default PopUp;