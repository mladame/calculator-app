import React, { useState } from "react";

export default function Keypad() {

    // useState for operands and operator
    const [operand1, setOperand1] = useState(''); //prev
    const [operator, setOperator] = useState('');
    const [operand2, setOperand2] = useState(''); //next

    // useState for each number
    const [number, setNumber] = useState('');

    // onclick add number to sequence
    const selectNumber = number => {
        if (number.target.value === 'delete') {
            if (operator === '') {
                setOperand1(operand1.slice(0, -1));
                setNumber(operand1.slice(0, -1));
            } else {
                setOperand2(operand2.slice(0, -1));
                setNumber(operand2.slice(0, -1));
            }
        } else {
            if (operator === '') {
                setOperand1(operand1 + number.target.value)
                setNumber(operand1 + number.target.value)
            } else {
                setOperand2(operand2 + number.target.value)
                setNumber(operand2 + number.target.value)
            }
        }
    }


    // const selectNumber = number => {
    //     // console.log(number.target.value);
    //     if (operator === '') {
    //         setOperand1(operand1 + number.target.value)
    //         setNumber(operand1 + number.target.value)
    //     } else {
    //         setOperand2(operand2 + number.target.value)
    //         setNumber(operand2 + number.target.value)
    //     }
    // }

    const selectOperator = operator => {
        setOperator(operator)
        console.log(operator)
    }

    const calculateResult = () => {
        const operand1Num = parseFloat(operand1) //prev
        const operand2Num = parseFloat(operand2)

        let result = ''

        switch (operator) {
            case '+':
                result = operand1Num + operand2Num
                break
            case '-':
                result = operand1Num - operand2Num
                break
            case '*':
                result = operand1Num * operand2Num
                break
            case '/':
                result = operand1Num / operand2Num
                break
            default:
                result = ''
        }

        setOperand1(result.toString())
        setOperand2('')
        setOperator('')
        setNumber(result.toString())
    }
    const clear = () => {
        setOperand1('');
        setOperator('');
        setOperand2('');
        setNumber('');
    }

    return (
        <div>

            <div className="calc-display">{number}</div>

            <div className="calc-keypad">
                <button onClick={selectNumber} value="7">7</button>
                <button onClick={selectNumber} value="8">8</button>
                <button onClick={selectNumber} value="9">9</button>
                <button onClick={selectNumber} value="delete">DEL</button>
                <button onClick={selectNumber} value="4">4</button>
                <button onClick={selectNumber} value="5">5</button>
                <button onClick={selectNumber} value="6">6</button>
                <button onClick={() => selectOperator('+')} value="+">+</button>
                <button onClick={selectNumber} value="1">1</button>
                <button onClick={selectNumber} value="2">2</button>
                <button onClick={selectNumber} value="3">3</button>
                <button onClick={() => selectOperator('-')} value="-">-</button>
                <button onClick={selectNumber} value=".">.</button>
                <button onClick={selectNumber} value="0">0</button>
                <button onClick={() => selectOperator('/')} value="/">/</button>
                <button onClick={() => selectOperator('*')} value="*">x</button>
                <button className="row-5" onClick={clear} value="reset">RESET</button>
                <button className="row-5" onClick={calculateResult} value="=">=</button>
            </div>

        </div>
    )
}