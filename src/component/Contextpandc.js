import React,{useState,useContext} from "react";

export const CountContext = React.createContext()
const CountProider = CountContext.Provider

export const Contextpandc = () => {
    const [count,setCount] = useState(0)

    console.log('contextparent render')
    return (
        <>
        <button onClick={() => setCount((c) => c + 1)}>Count {count}</button>
        <CountProider value={count}>
        <ChildA/>
        </CountProider>
        </>
    )
}

export const ChildA = () =>{
    console.log('Child A Render');
    return (
        <>
        <div>Child A</div>
        <ChildB/>
        
        </>
    )
}

export const ChildB = () =>{
    console.log('Child B Render')
    return(
        <>
        <div>Child B</div>
        <ChildC/>
        </>
    )
}

export const ChildC = () =>{
    // const count = useContext(CountContext)
    console.log('Child C Render')
    return(
        <>
        <div>Child C </div>
        <CountContext.Consumer>
            {(count)=>{
                   <h4>count = {count}</h4>
            }}
        </CountContext.Consumer>
        <ChildC/>
        </>
    )
}