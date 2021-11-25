import React from "react";
import './Display.css'



function Display(props) {




    return (
        <div className="counter-display">
            Counter: {props.valueToDisplay}
        </div>
    )
}



export default Display;