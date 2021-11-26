import React, { useEffect, useState } from "react";
import { Component } from "react";
import ButtonsPannel from "./ButtonsPannel";
import './Counter.css';
import Display from "./Display";
import Step from "./Step";


const Counter = (props) => {


    const [counterValue, setCounterValue] = useState(props.initValue);
    const [stepValue, setStepValue] = useState(1);


    const stepValueChange = (e) => {

        // console.log(e.target.value);
        // console.log(+e.target.value);

        setStepValue(+e.target.value)
    }


    const buttonHandleChange = (action) => {


        let currentCounterValue = counterValue
        let currentStepValue = stepValue
        console.log(currentStepValue);

        // let arr = currentCounterValue + currentStepValue
        // console.log(arr);

        if (action === 'add-x') {
            currentCounterValue += currentStepValue

        } else if (action === 'reset') {
            currentCounterValue = 0
        } else {
            currentCounterValue = props.initValue

        }

        setCounterValue(currentCounterValue)
    }

    return (
        <div>
            <Display valueToDisplay={counterValue} />
            <ButtonsPannel buttonMethod={buttonHandleChange}
                stateValueToDisplay={stepValue} />
            <Step stepMethod={stepValueChange} />
        </div>
    )
}




export default Counter;