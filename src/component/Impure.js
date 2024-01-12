import React ,{useState} from "react"

export const Impure = () => {
    const [count,setCount] =useState(0)
    const [name,setName] = useState("menaga")

    console.log("Parent render")
  return (
    <div>
      <button onClick={() =>setCount((c) => c+1)}>count -{count}</button>
      <button onClick={() => setName('Kalai')}>Change name</button>
      <MemoizedImpure1 name={name}/>  
       </div>
  )
}

export const Impure1 = ({name}) => {
    const date = new Date()
    console.log('child render');
  return (
    <div>
      Hello {name} . it is currently {date.getHours()}: {date.getMinutes()}:{" "} 
      {date.getSeconds()} 
    </div>
  )
}

export const MemoizedImpure1 = React.memo(Impure1)


