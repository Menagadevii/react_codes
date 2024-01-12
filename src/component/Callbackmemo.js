import React ,{useState,useMemo,useCallback} from "react"

export const Callbackmemo = () => {
    const [count,setCount] =useState(0)
    const [name,setName] = useState("menaga")
     
    const person ={
        fname: 'menu',
        lname: 'kan'
     }
     const memoizedPerson =useMemo(() => person, [])

     const handleClick = () => {}

    const memoizedHandleClick = useCallback(handleClick, [])

    console.log("Parent render")
  return (
    <div>
      <button onClick={() =>setCount((c) => c+1)}>count -{count}</button>
      <button onClick={() => setName('Kalai')}>Change name</button>
      <memoizedHandleClick name={name} handleClick={memoizedPerson}/>
       </div>
  )
}



