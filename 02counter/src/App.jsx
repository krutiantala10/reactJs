import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter , setCounter] = useState(10)

  // let counter = 5

  const addValue = () => {
    // console.log("value added",Math.random())
    // counter = counter + 1;
    setCounter(counter+1)
    console.log('Clicked', counter);
  }
  const removeValue = () => {
    // counter = counter - 1;
    setCounter(counter-1)
    console.log('Clicked', counter);
  }
  return (
    <>
      <button onClick={addValue}>Add value</button>
      <h2>Counter value : {counter} </h2>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
