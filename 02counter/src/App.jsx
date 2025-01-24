import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  // let counter = 5
  const increaseValue = () => {
    // counter = counter +1 
    if (counter < 20)
      // setCounter(counter + 1)
    setCounter((prevCounter)=> {return prevCounter + 1})
    setCounter(prevCounter=> prevCounter + 1)
    setCounter(prevCounter=> prevCounter + 1)
    setCounter(prevCounter=> prevCounter + 1)
    setCounter(prevCounter=> prevCounter + 1)
    

  }

  const decreaseValue = () => {
    if (counter > 0)
      setCounter(counter - 1)
  }
  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value: {counter} </h2>

      <button onClick={increaseValue}>Increase Value  </button>
      <br />
      <button onClick={decreaseValue}>Decrease Value </button>
      <h2>{counter}</h2>
    </>
  )
}

export default App
