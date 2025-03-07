import React from 'react';
import Greeting from './Greeting';
import Calculator from './Calculator';
import AlertEvent from './Alert';
import MultipleInput from './MultipleInput';
import Timer from './Timer';


function App() {

  return (
    <div>
      <div>
        <Greeting />
      </div>
      <div>
        <Calculator />
      </div>
      <div>
        <AlertEvent />  
      </div>
      <div>
        <MultipleInput />
      </div>
      <div>
        <Timer />
      </div>
    </div>
  );
}

export default App;