import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  //let counter = 15
  const addValue = () => {
    counter = counter +1;
    setCounter(counter)    
  }
  const MinusValue = () => {
    //counter = counter - 1;
    if(counter === 0) return;
    setCounter(counter - 1)    
  }


  return (
    <>
      <h1>How many kids you want?</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}>Add value{counter}</button>
      <br />
      <button
      onClick={MinusValue}>decrease Value{counter}</button>
    </>
  )
}

export default App
