
import {useState} from 'react'
import React from 'react'


function App() {
  const [color,setColor]=useState("olive");
  return (
    
    <div className='w-full h-screen duration-200' 
    style={{backgroundColor:color}}>

      <div className='fixed flex flex-wrap justify-center 
      bottom-12 inset-x-0 px-2'> 
       
       <div className='flex flex-wrap justify-center gap-3 
       shadow-lg bg-white px-3 py-2 text-black rounded-3xl'>
         <button 
       onClick={()=>setColor("olive")}
       className='outline-none px-4 py-1 rounded-full
        text-white shadow-lg '
       style={{backgroundColor:"olive"}}>
         Olive
       </button>
       <button className='outline-none px-4 py-1 rounded-full
        text-white shadow-lg '
        onClick={()=>setColor("red")}
       style={{backgroundColor:"red"}}>
          Red
       </button>
       <button className='outline-none px-4 py-1 rounded-full
        text-white shadow-lg '
        onClick={()=>setColor("blue")}
       style={{backgroundColor:"blue"}}>
        Blue
       </button>
       <button className='outline-none px-4 py-1 rounded-full
        text-white shadow-lg '
        onClick={()=>setColor("green")}
       style={{backgroundColor:"green"}}>
        Green
       </button>
       <button className='outline-none px-4 py-1 rounded-full
        text-white shadow-lg '
        onClick={()=>setColor("brown")}
       style={{backgroundColor:"brown"}}>
        Brown
       </button>

       <button className='outline-none px-4 py-1 rounded-full
        text-white shadow-lg '
        onClick={()=>setColor("purple")}
       style={{backgroundColor:"purple"}}>
        Purple
       </button>
       <button className='outline-none px-4 py-1 rounded-full
        text-white shadow-lg '
        onClick={()=>setColor("gray")}
       style={{backgroundColor:"gray"}}>
        Gray
       </button>
       
       
       </div>
      </div>
    </div>  
      
    
    
  )
}

export default App
