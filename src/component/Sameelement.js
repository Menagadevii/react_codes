import React,{useState} from 'react'


const Sameelement = ({children}) => {
    const [count,setCount] =useState(0)

    console.log("ParentOne render")
  return (
    <div>
      <button onClick={() =>setCount((c) => c+1)}>count -{count}</button>
      {children}
      {/* <Sameelement1/> */}
      </div>
  )
}

export const Sameelement1 = () => {
    console.log('childOne render')
return(
    <div>
        ChildOne component
    </div>
)
}

export const Grandparent = () =>{
    const [newCount,setNewCount]= useState(0)
    return(
        <div>
    <button onClick={() => setNewCount(nc => nc + 1)}>
        Grandparent count - {newCount}</button>
        <Sameelement newCount ={newCount}>
            <Sameelement1/>
        </Sameelement>
        </div>
    )
}


export default  Sameelement;
