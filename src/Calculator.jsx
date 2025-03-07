import React, { useState } from 'react';

function Calculator() {
  const [number1, setNumberOne] = useState(0);
  const [number2, setNumberTwo] = useState(0);
  const [operator, setOperation] = useState("");


  let result;
  switch (operator) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    case '/':
      result = number2 !== 0 ? number1 / number2 : 'Cannot divide by zero';
      break;
    default:
      result = 'Invalid operator';
  }

  return (
    <div>
      <input 
        type="number" 
        value={number1} 
        onChange={(e) => setNumberOne(Number(e.target.value))} 
        placeholder="Enter first number" 
      />
      <input 
        type="number" 
        value={number2} 
        onChange={(e) => setNumberTwo(Number(e.target.value))} 
        placeholder="Enter second number" 
      />
      <select 
        value={operator} 
        onChange={(e) => setOperation(e.target.value)}
      >
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <p>Result: {isNaN(result) ? 'Invalid calculation' : result}</p>
    </div>
  );
}

export default Calculator;