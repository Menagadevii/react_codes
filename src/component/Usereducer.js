import React,{useReducer} from 'react'
const initialState =0

const reducer =(state,action) =>{
    switch(action){
        case'increment':return state +1
        case 'decrement':return state -1
        case'rest':return initialState
        default:return state

    }
}

const Usereducer = () => {
    const [count,dispatch] = useReducer(reducer,initialState)
    console.log('useReducer Render');
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => dispatch('increment')}>increment</button>
      <button onClick={() => dispatch('decrement')}>decrement</button>
      <button onClick={() => dispatch('reset')}>reset</button>
    </div>
  )
}

export default Usereducer
