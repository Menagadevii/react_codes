import React from "react"

const Event =() =>{
let fun =() =>{
    alert("haii")
    // document.write("haii")
    document.getElementById("V").innerText="haii"
}
return(
    <div>
        <button onClick={fun}>try it</button>
        <p id='V'></p>
    </div>
)    
}
export class Event2 extends React.Component{
    render(){
    let fun1 =() =>{
        alert("touch me")
    }
        return(
            <button onMouseMove={fun1}>click</button>
        ) 
    }
}

export default Event;