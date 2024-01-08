import React, { Component } from 'react'

export class Conditional extends Component {
    constructor(Props){
        super(Props)
        this.state = {
            isLoggedIn:true
        }
    }
  render() {
    return this.state.isLoggedIn && <div>haii frds </div>
//     return this.state.isLoggedIn ?(
//         <div>haii frds </div>
//     ) : (
//         <div>Welcome to my home</div>
//     )

    
    // if(this.state.isLoggedIn){
    //     return<div>
    //        haii frds 
    //     </div>
    // }else{
    //     return<div>Welcome to my home</div>
    // }
    // return (
    //   <div>
    //    <div>haii frds</div> 
    //    <div>Welcome to my home</div>
    //   </div>
    // )
  }
}

export default Conditional
