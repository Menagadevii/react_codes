import React ,{useState}from 'react'
export const Setstate = () => {
    //const [state(state variable),setstate(update state variable)] <-(array destructure) = useState(initialstate)
    const [count,setCount] = useState(0)
return (
    <div>
      <b>useState hook</b>
        <div>Returns a on array[] its stateful value (element), and a function (element) to update it.</div>
      <button onClick={()=>setCount(count+1)}>click me!</button>
      <p>current value of count is {count}</p>
      <hr></hr>
       </div>
  )
}

export const Setstate1 = () => {
    const [count,setCount] = useState(0)
    const [person,setPerson] =useState({firstname:'' , lastname:''})
const increment5=() =>{
    // for (let i = 0; i < 5; i++) {
    //     setCount(count+1);
    // }
    for (let i = 0; i < 5; i++) {
        setCount((prevState) => prevState+1);

    }
}
  return (
    <div>
        <b>useState hook with Objects{ }</b>
        <div>Returns an array[] its stateful value (element), and a function (element) to update it.</div>
      <button onClick={()=>setCount(count+1)}>click me!</button>
      <p>current value of count is {count}</p>
      <button onClick={()=>increment5()}>increment5</button>
      <hr/>
      <b> useState with previous state { }</b>
        <div>Returns an array[] its stateful value (element), and a function (element) to update it.</div>
      <button onClick={()=>setCount(count+1)}>click me!</button>
      <p>current value of count is {count}</p>
      <button onClick={()=>increment5()}>increment5</button>
      <hr/>

      <input type='text' onChange={(e)=>setPerson({...person, firstname:e.target.value})} placeholder='enter your 1st name:'/><br />
      <input type='text' onChange={(e)=>setPerson({...person, lastname:e.target.value})} placeholder='enter your 2st name:'/>
      {JSON.stringify(person)}
      <p>first name : {person.firstname}</p>
      <p>last name : {person.lastname}</p>
      <p>full name: {person.firstname}{person.lastname}</p>
      <div>func compo la useState use panna athu la obj use panna athu automatic ah merge pannathu.
        ana class compo la state update pannum poth athu automatic ah merge pannum.
        ...person, firstname:e.target.value - existing state ,update state
      </div>
<hr />
    </div>
  )

}


