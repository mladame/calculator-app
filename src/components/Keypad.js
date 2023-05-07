import React, { useState } from "react";

export default function Keypad() {

    // useState for operands and operator
    const [operand1, setOperand1] = useState('');
    const [operator, setOperator] = useState('');
    const [operand2, setOperand2] = useState('');

    // useState for each number
    const [number, setNumber] = useState('');

    // onclick add number to sequence

    const selectNumber = number => {
        if (operator === '') {
            setOperand1(operand1 + number)
            setNumber(operand1 + number)
        } else {
            setOperand2(operand2 + number)
            setNumber(operand2 + number)
        }
    }

    const selectOperator = operator => {
        setOperator(operator)
        console.log(operator)
    }

    

    const calculateResult = () => {
        const operand1Num = parseFloat(operand1)
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
    const clear = operator => {
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
                <button onClick={() => setNumber('')} value="delete">DEL</button>
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