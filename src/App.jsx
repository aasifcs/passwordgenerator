import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const Counter =()=>{
    setCount(count+1)
  }
  return (
    <>
    <h1>{Counter}</h1>
    <button className="button"  onClick={()=>{setCount(count +1)}}>Click to Incrrease</button>
    <button type="button">jhgjd</button>
    </>
  )
}

export default App
