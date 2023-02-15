import React, { useState } from 'react'
import Manjeet from './Component/Class'
import Function from './Component/Function'



const App = () => {
  const[onClick,setOnClick]=useState(false);
  const[onClickClass,setOnClickClass]=useState(false);
  
  return (
  <div>
     <button onClick={()=>setOnClick(!onClick)}>To see styling in Function Component</button>
     {onClick&&<Function/>}
     <button onClick={()=>setOnClickClass(!onClickClass)}> To see styling in  Class Component</button>
     {onClickClass&&<Manjeet/>}
  </div>
  )
}

export default App
