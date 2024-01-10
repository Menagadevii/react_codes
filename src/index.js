// import React, { Component } from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import Navbar from './component/Navbar';
// import Componets from './component/componets';
// import ExpenseEntryItem from './component/clscomponent';
// import Pro, { Event1,  Prom,  Prom1,  Sum, Time, Today } from './component/Pro';
// import Counter, { Counter1 } from './component/state';
// import Event, { Event2, EventBind } from './component/Handle';
// import Parent from './component/Parent';
// import Child from './component/Child';
// import Conditional from './component/Conditional';



// // import Login from './Login';

// const data="MenagaDevi"
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//    <Conditional/> 
//      <Parent/> 
//     <EventBind/>
//   <Event/>
//   <Event2/> 
//    <Counter/>  
//     <App /> 
//    <Componets />
//    <Navbar/> 
//    <ExpenseEntryItem/> 
//    <Pro msg={data}/> 
//    <Today/>
//    <Event1/> 
//     <Sum/> 
//     <Prom firstName ="menaga" lastName ="devi" child ="A"/>
//     <Prom1 firstName ="menaga" lastName ="devi" child ="A"/> 
//     <Time/>
   
//     <Counter/>
//  <Counter1/> 
// </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App, { Hello } from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />

  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();