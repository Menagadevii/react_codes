import React, { Component } from 'react'

export class Renderprops extends Component {
    // constructor(Props){
    //     super(Props)
        
    //     this.state ={
    //         count:0
    //     }
    // }
    // incrementCount =() => {
    //     this.setState(prevState =>{
    //         return {count:prevState.count +1}
    //     })
    // }
  render(){
    const {count,incrementCount} = this.props
    return <button onClick={incrementCount}>Clicked {count} times</button>
  }
}

export class Hover extends Component{
    // constructor(Props){
    //     super(Props)
        
    //     this.state ={
    //         count:0
    //     }
    // }
    // incrementCount =() => {
    //     this.setState(prevState =>{
    //         return {count:prevState.count +1}
    //     })
    // }
    render(){
        const {count,incrementCount} =this.props
        return(
            <h2 onMouseOver= {incrementCount}>Hover {count} times</h2>
        )
    }
}

export class Props2 extends Component{
  render(){
    return(
        <div>
          {this.props.render(false)} 
        </div>
    )
  }  
}

export class Count extends Component{
    constructor(Props){
        super(Props)
        
        this.state ={
            count:0
        }
    }
    incrementCount =() => {
        this.setState(prevState =>{
            return {count:prevState.count +1}
        })
    }
    render(){
        return (
            <div>
             {this.props.render(this.state.count,this.incrementCount)}
            </div>
        )
    }
}
export default Renderprops
