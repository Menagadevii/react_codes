import React  from "react";
import Child from "./Child";

class Parent extends React.Component{
    constructor(Props) {
        super(Props)
        this.state = {
            parentName :'parent'
        }
        this.greetParent = this.greetParent.bind(this)
    }
    greetParent(childName){
        alert(`Haii ${this.state.parentName} from ${childName}`)
    }
    render(){
        return(
            <div>
<Child greetHandler ={this.greetParent}/>
            </div>
        )
    }
}
export default Parent;