import React ,{useReducer}from "react"
// import './App.css'
import ComponentA, { ComponentB, ComponentC } from "./Context2"
export const CountContext =React.createContext()
const initialState = 0
const reducer = (state, action) =>{
 switch(action){
 case 'increment':
  return state +1
  case 'decrement':
    return state -1
    case 'reset':
      default:
        return state
}
}

function Apps(){
const [count,dispatch] = useReducer(reducer,initialState)
return(
    <CountContext.Provider
    value={{countState: count,countDispatch:dispatch}}>
    <div>
        <ComponentA/>
       <ComponentB/>
       <ComponentC/>
      </div>
      </CountContext.Provider>
)
}
export default Apps