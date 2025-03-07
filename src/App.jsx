import React, { useState } from 'react';
import Greeting from './Greeting';
import Calculator from './Calculator';
import AlertEvent from './Alert';
import MultipleInput from './MultipleInput';
import Timer from './Timer';


function App() {
  const [userName, setUserName] = useState("User");
  const [clickCount, setClickCount] = useState(0); 
  const [number1, setNumberOne] = useState(0);
  const [number2, setNumberTwo] = useState(0);
  const [operator, setOperation] = useState("");

  
  return (
    <div>
      <div>
        <input
          type='text'
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder='Enter User Name' 
        />
        <Greeting name={userName} />
      </div>
      <div>
        <p>The Button Has Been Clicked {clickCount} times.</p>
        <button onClick={() => setClickCount(clickCount + 1)}>Click Me</button>
      </div>
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
        <Calculator num1={number1} num2={number2} operator={operator} />
      </div>
      <div>
        <AlertEvent />  
        <MultipleInput />
        <Timer />
      </div>
    </div>
  );
}

export default App;