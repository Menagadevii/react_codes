import React ,{useState} from "react"

export const Memoprops = () => {
    const [count,setCount] =useState(0)
    const [name,setName] = useState("menaga")
     
    const person ={
        fname: 'menu',
        lname: 'kan'
     }

     const handleClick = () => {}

    console.log("Parent render")
  return (
    <div>
      <button onClick={() =>setCount((c) => c+1)}>count -{count}</button>
      <button onClick={() => setName('Kalai')}>Change name</button>
      <MemoizedMemoprops1 name={name} handleClick={handleClick}/>
       </div>
  )
}


export const Memoprops1 = ({name}) => {
    console.log('child render');
  return <div>
        Hello {name} 
        </div>
  
}

export const MemoizedMemoprops1 = React.memo(Memoprops1)