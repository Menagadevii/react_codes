import React ,{useState} from "react"
const Memoreact = () => {
    const [count,setCount] =useState(0)
    const [name,setName] = useState("menaga")

    console.log("ParentTwo render")
  return (
    <div>
      <button onClick={() =>setCount((c) => c+1)}>count -{count}</button>
      <button onClick={() => setName('Kalai')}>Change name</button>
      <MemoizedChildTwo name ={name}/>
     </div>
  )
}

export const Memoreact1 = () => {
    console.log('childTwo render')
return(
    <div>
        childTwo component
    </div>
)
}

export const MemoizedChildTwo = React.memo(Memoreact1)

export default Memoreact;