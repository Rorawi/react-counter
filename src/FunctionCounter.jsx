import React,{useState} from 'react'
import './myStyles.css'

function FunctionCounter() {
    const [count, setCount]=useState(0)
   const increment=()=>{
        setCount(count+1)
    }
   const Decrement=()=>{
        setCount(count-1)
    }
  return (
    <div className='functioncounter'>
    <h1> FUNCTION COUNTER {count}</h1>
    <button onClick={increment}>Increase</button>
    <button onClick={Decrement}>Decrease</button>
    </div>
  )
}

export default FunctionCounter