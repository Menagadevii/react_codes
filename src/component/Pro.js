import React from 'react'

const Pro = (Props) => {
  return (
    <div>
      <h1>{Props.msg}</h1>
    </div>
  )
}
// //expression
//  export let Today =() =>{
//   return(
//   <p>Today time is {Date()}</p>
//   )
// }

// export let Sum =() =>{
//   return(
//     <p>the sum is :{27+10}</p>
//   )
// }
// //function
// export let Time=()=>{
//   let date=new Date()
//   let day=["Sunday" ,"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"  ]
//   let month=["January", "February", "March"," April"," May", "June", "July", "August", "September", "October", "November", "December"]
//   return(
//       <div className='Time'>
//           <p>today is: {day[date.getDay()]}</p>
//           <p>now {date.getHours()} o'clock</p>
//           <p>today date is : {date.getDate()}</p>
//           <p>this month is :{month[date.getMonth()]}</p>
//       </div>
//   )
// }

// //attribute
// export let Event1=()=>{
//   return(
//       <div>
//        name:
//         <input name='name' type='text' id='input' placeholder='name' required></input><br/><br></br>
//            id:  
//           <input name='id' type='text' id='input' placeholder='id' required></input><br/><br></br>
//           passward:
//           <input name='passward' type='password' id='input' placeholder='secret' required></input><br/><br></br>
//       </div>
//   )
// }

// export const Prom = (Props) => {
//   console.log(Props);
//   const {firstName,lastName,child}=Props;
//   return(
//     <div>
// <h3>welcome MS.{firstName}{lastName}</h3>
// {child}
//     </div>
//   )
// }

// export class Prom1 extends React.Component{
//   render(){
//     console.log(this.props);
//     const {firstName,lastName,child}= this.props;
//     return(
//       <div>
//         <h3>welcome MS.{firstName}{lastName}</h3>
// {child}
//       </div>
//     )
// }

// }



export default Pro

