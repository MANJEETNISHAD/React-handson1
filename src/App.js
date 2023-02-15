import React, { useState } from 'react'
import Manjeet from './Component/Class'
import Function from './Component/Function'
import './App.css'


const App = () => {
  const[onClick,setOnClick]=useState(false);
  const[onClickClass,setOnClickClass]=useState(false);
  
  return (
  <div className="container">
     <button className="btn"onClick={()=>setOnClick(!onClick)}>To see styling in Function Component</button>
     {onClick&&<Function/>}
     <button className="btn btn-2"onClick={()=>setOnClickClass(!onClickClass)}> To see styling in  Class Component</button>
     {onClickClass&&<Manjeet/>}
  </div>
  )
}

export default App
