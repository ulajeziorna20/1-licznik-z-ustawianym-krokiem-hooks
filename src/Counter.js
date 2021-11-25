import React, { useEffect, useState } from "react";
import { Component } from "react";
import ButtonsPannel from "./ButtonsPannel";
import './Counter.css';
import Display from "./Display";
import Step from "./Step";


const Counter = (props) => {




    const [counterValue, setCounterValue] = useState; (props.initValue);
    const [stepValue, setStepValue] = useState(1);

    // constructor(props) {
    //     super(props)
    //     this.state = ({

    //         counterValue: this.props.initValue,
    //         stepValue: 1
    //     })
    // }



    useEffect((e) => {

        stepValue = +e.target.value
    })


    // stepValueChange = (e) => {

    //     // console.log(e.target.value);
    //     // console.log(+e.target.value);

    //         stepValue = +e.target.value
    // }







    buttonHandleChange = (action) => {


        this.setState((prevState, prevProps) => {


            let currentCounterValue = prevState.counterValue
            let currentStepValue = prevState.stepValue
            console.log(currentStepValue);

            let arr = currentCounterValue + currentStepValue
            console.log(arr);

            if (action === 'add-x') {
                currentCounterValue += currentStepValue

            } else if (action === 'reset') {
                currentCounterValue = 0
            } else {
                currentCounterValue = prevProps.initValue

            }



            return ({
                counterValue: currentCounterValue
            })

        })

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