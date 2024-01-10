import React,{useState} from 'react'


const Parentchild = () => {
    const [count,setCount] =useState(0)

    console.log("parent render")
  return (
    <div>
      <button onClick={() =>setCount((c) => c+1)}>count -{count}</button>
      <button onClick={() =>setCount(0)}>count to 0</button>
      <button onClick={() =>setCount(5)}>count to 5</button>
      {/* <Child/> */}
    </div>
  )
}

export const Child = () => {
    console.log('child render')
return(
    <div>
        Child component
    </div>
)
}

export default Parentchild;
