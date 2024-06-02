import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter,setCounter]=useState(10);

const addValue=() =>{
  
  setCounter(prevcounter => prevcounter+1);
  setCounter(prevcounter => prevcounter+1);
  setCounter(prevcounter => prevcounter+1);

}
const decValue=()=>{
  
  setCounter(prevcounter=> prevcounter -1);
  setCounter(prevcounter=> prevcounter -1);
  setCounter(prevcounter=> prevcounter -1);
 
console.log("value dec",counter);

}


  return (
    <>
     <h1>Chai or Reactjs</h1>
     <h2>Counter value: {counter}</h2>
     <button onClick={decValue}> Remove Value</button>
     <br />
     <br />
    <button onClick={addValue}>Add value</button>
       
    </>
  )
}

export default App
