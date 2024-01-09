import React,{useState} from 'react'

const Renderusestate= () => {
    const [count,setCount] =useState(0)

    console.log("usestate render")
  return (
    <div>
      <button onClick={() =>setCount((c) => c+1)}>count -{count}</button>
    </div>
  )
}

export default Renderusestate
