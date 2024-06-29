import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import './App.css';

function App() {
  const [display, setDisplay] = useState('');
  const [memory, setMemory] = useState(0);

  const handleClick = (value) => setDisplay(display + value);

  const handleClear = () => setDisplay('');

  const handleCalculate = () => {
    try {
      setDisplay(evaluate(display).toString());
    } catch {
      setDisplay('Error');
    }
  };

  const handleMemoryAdd = () => setMemory(memory + parseFloat(display));

  const handleMemorySubtract = () => setMemory(memory - parseFloat(display));

  const handleMemoryRecall = () => setDisplay(display + memory.toString());

  const handleMemoryClear = () => setMemory(0);

  const handleSpecialFunction = (fn) => {
    try {
      setDisplay(fn(parseFloat(display)).toString());
    } catch {
      setDisplay('Error');
    }
  };

  const specialFunctions = {
    exp: Math.exp,
    sin: Math.sin,
    cos: Math.cos,
    tan: Math.tan,
    cot: (x) => 1 / Math.tan(x),
    sec: (x) => 1 / Math.cos(x),
    csc: (x) => 1 / Math.sin(x),
    log: Math.log,
    ln: Math.log10,
    inv: (x) => 1 / x,
    factorial: (x) => {
      let result = 1;
      for (let i = 1; i <= x; i++) {
        result *= i;
      }
      return result;
    },
    percentage: (x) => x / 100,
    pi: () => Math.PI,
    euler: () => Math.E,
    pow: (x) => x ** 2,
    sqrt: Math.sqrt,
    cbrt: Math.cbrt,
    abs: Math.abs,
    round: Math.round,
    floor: Math.floor,
    ceil: Math.ceil,
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="memory-display">Memory: {memory}</div>
      <div className="operators">
        <button className="operator" onClick={() => handleClick('^')}>^</button>
        <button className="operator" onClick={() => handleClick('%')}>%</button>
        <button className="operator" onClick={handleClear}>C</button>
        <button className="operator" onClick={handleCalculate}>=</button>
        <button className="operator" onClick={() => handleClick('-')}>-</button>
        <button className="operator" onClick={() => handleClick('+')}>+</button>
        <button className="operator" onClick={() => handleClick('/')}>/</button>
        <button className="operator" onClick={() => handleClick('*')}>*</button>
        </div>
        <br></br>
      <div className="buttons">
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('5')}>2</button>
        <button onClick={() => handleClick('4')}>3</button>
        <button onClick={() => handleClick('3')}>4</button>
        <button onClick={() => handleClick('2')}>5</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={() => handleClick('π')}>π</button>
        <button onClick={() => handleClick('(')}>(</button>
        <button onClick={() => handleClick(')')}>)</button>
        <button className="special-function" onClick={() => handleSpecialFunction(specialFunctions.exp)}>exp</button>
        <button className="special-function" onClick={() => handleSpecialFunction(specialFunctions.sin)}>sin</button>
        <button className="special-function" onClick={() => handleSpecialFunction(specialFunctions.cos)}>cos</button>
        <button className="special-function" onClick={() => handleSpecialFunction(specialFunctions.tan)}>tan</button>
        <button className="special-function" onClick={() => handleSpecialFunction(specialFunctions.cot)}>cot</button>
        <button className="special-function" onClick={() => handleSpecialFunction(specialFunctions.sec)}>sec</button>
        <button className="special-function" onClick={() => handleSpecialFunction(specialFunctions.csc)}>csc</button>
        <button className="special-function" onClick={() => handleSpecialFunction(specialFunctions.log)}>log</button>
        <button className="special-function" onClick={() => handleSpecialFunction(specialFunctions.ln)}>ln</button>
        <button className="special-function" onClick={() => handleSpecialFunction(specialFunctions.inv)}>1/x</button>
        <button className="special-function" onClick={() => handleSpecialFunction(specialFunctions.factorial)}>x!</button>
        <button className="special-function" onClick={() => handleSpecialFunction(specialFunctions.percentage)}>%</button>
        <button className="special-function" onClick={() => handleSpecialFunction(specialFunctions.pi)}>π</button>
        <button className="special-function" onClick={() => handleSpecialFunction(specialFunctions.euler)}>e</button>
        <button className="special-function" onClick={() => handleSpecialFunction(specialFunctions.pow)}>x²</button>
        <button className="special-function" onClick={() => handleSpecialFunction(specialFunctions.sqrt)}>√x</button>
        <button className="special-function" onClick={() => handleSpecialFunction(specialFunctions.cbrt)}>∛x</button>
        <button className="special-function" onClick={() => handleSpecialFunction(specialFunctions.abs)}>|x|</button>
        <button className="special-function" onClick={() => handleSpecialFunction(specialFunctions.round)}>round</button>
        <button className="special-function" onClick={() => handleSpecialFunction(specialFunctions.floor)}>floor</button>
        <button className="special-function" onClick={() => handleSpecialFunction(specialFunctions.ceil)}>ceil</button>
        <button className="special-function" onClick={() => handleClick('!')}>!</button>
        
        <button className="memory-function" onClick={handleMemoryAdd}>M+</button>
        <button className="memory-function" onClick={handleMemorySubtract}>M-</button>
        <button className="memory-function" onClick={handleMemoryRecall}>MR</button>
        <button className="memory-function" onClick={handleMemoryClear}>MC</button>
      </div>
      
    </div>
  );
}

export default App;
