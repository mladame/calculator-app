import React, { useState } from "react";

export default function Keypad() {

    // useState for each number
    const [number, setNumber] = useState('');

    // onclick add number to sequence
    const type = (value) => {
        // setNumber(number + value);
        
        console.log(value);
    };

    function DisplayNumbers(value) {
        return (
            <div className="display">{value}</div>
        )
        
    }


    // onclick math +, -, x, /, =

    // onclick reset

    return (
        <div>

            <div className="calc-display">123456</div>

            <div className="calc-keypad">
                <button onClick={type(this)}>7</button>
                <button onClick={type(this)}>8</button>
                <button onClick={type(this)}>9</button>
                <button onClick={type(this)}>del</button>
                <button onClick={type(this)}>4</button>
                <button onClick={type(this)}>5</button>
                <button onClick={type(this)}>6</button>
                <button onClick={type(this)}>+</button>
                <button onClick={type(this)}>1</button>
                <button onClick={type(this)}>2</button>
                <button onClick={type(this)}>3</button>
                <button onClick={type(this)}>-</button>
                <button onClick={type(this)}>.</button>
                <button onClick={type(this)}>0</button>
                <button onClick={type(this)}>/</button>
                <button onClick={type(this)}>*</button>
                <button onClick={type(this)}>reset</button>
                <button onClick={type(this)}>=</button>
                
            </div>

        </div>
    )
}