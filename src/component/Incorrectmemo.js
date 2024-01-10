import React ,{useState} from "react"
const Incorrectmemo = () => {
    const [count,setCount] =useState(0)
    const [name,setName] = useState("menaga")

    console.log("ParentThree render")
  return (
    <div>
      <button onClick={() =>setCount((c) => c+1)}>count -{count}</button>
      <button onClick={() => setName('Kalai')}>Change name</button>
      <MemoizedChildThree name ={name}>
        <strong>Hello</strong>
        </MemoizedChildThree>
     </div>
  )
}

export const Incorrectmemo1 = ({children,name}) => {
    console.log('childThree render')
return <div>
       {children} {name}
    </div>

}

export const MemoizedChildThree = React.memo(Incorrectmemo1)

export default Incorrectmemo;