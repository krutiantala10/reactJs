import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'

function App() {
  const [count, setCount] = useState(0)
  let myArr={
    name:"abc",
    age:10
  }

  let newArr=[123]

  return (
    <>
      <h1 className='bg-green-300 p-3 text-black rounded-lg mb-4'>Tailwind css</h1>
      <Card username="kruti" btnText="Click me"/>
      <Card username="nandani" />

    </>
  )
}

export default App
