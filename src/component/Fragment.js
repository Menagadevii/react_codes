import React, { Component } from 'react'
import { Pure, Regular } from './Fragment1'

export default class Parentcomp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"menaga"
      }
    }
    
    componentDidMount(){
        setInterval(()=>{
          this.setState({
            name:"menaga"
          })
        },2000)
    }
  render() {
  return (
      <div>
        parent component
        <Pure name={this.state.name}/>
        {/* <Regular name={this.state.name}/> */}
      </div>
    )
  }
}
