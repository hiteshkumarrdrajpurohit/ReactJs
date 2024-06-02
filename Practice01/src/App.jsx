import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
function App() {
  const [count, setCount] = useState(0);

  return (
    < >

     <Card  om='Hitesh' btnTxt1="India" btnTxt2="Download" />
     <br />
     <Card om="Kunal"  btnTxt1="Yupp" btnTxt2="Get" />
     
    </>
  )
}

export default App
