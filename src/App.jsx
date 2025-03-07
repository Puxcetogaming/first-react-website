import React, { useState } from 'react';
import Greeting from './Greeting';
import Calculator from './Calculator';

function App() {
  const [userName, setUserName] = useState("User");
  const [clickCount, setClickCount] = useState(0); 
  const [number1, setNumberOne] = useState(0);
  const [number2, setNumberTwo] = useState(0);
  const [operator, setOperation] = useState("");

  
  return (
    <div>
      <input
        type='text'
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder='Enter User Name' 
      />
      <Greeting name={userName} />
      <p>The Button Has Been Clicked {clickCount} times.</p>
      <button onClick={() => setClickCount(clickCount + 1)}>Click Me</button>
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
        <input 
          type="text" 
          value={operator} 
          onChange={(e) => setOperation(e.target.value)} 
          placeholder="Enter operator" 
        />
      </div>
      <Calculator num1={number1} num2={number2} operator={operator} />
    </div>
  );
}

export default App;