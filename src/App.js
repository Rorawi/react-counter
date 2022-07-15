import React from 'react';
import ClassCounter from './ClassCounter';
import FunctionCounter from './FunctionCounter';
import "./myStyles.css";

function App() {
  return (
   <div className='style'>
     <div className="App">
      <ClassCounter className="classcounter"/>
      <FunctionCounter className="functioncounter"/>
    </div>
   </div>
  );
}

export default App;



