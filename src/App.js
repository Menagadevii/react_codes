// import Login from "./component/login";
// import './App.css';
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
import Home from "./component/Home";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";
import LoginPage from "./component/LoginPage";
import Parentcomp from "./component/Fragment";
import { Demo, Pure, Regular } from "./component/Fragment1";
import Renderprops, { Count, Hover, Props2 } from "./component/Renderprops";
import Crud from "./component/Crud";
import { Setstate, Setstate1 } from "./component/Usestate";
import Useeffect from "./component/Useeffect";
import Fetching from "./component/Fetching";
import ContextA, { ContextB, ContextC } from "./component/Context";
import UseReducersimple from "./component/UseReducersimple";
import Reducercomplex from "./component/Reducercomplex";
import MultipleReducer from "./component/MultipleReducer";
import Fetchusered, { Fetchusered2 } from "./component/Fetchusered";
import ComponentA, { ComponentB, ComponentC } from "./component/Context2";
// import Conditionrun from "./component/Conditionrun";
import Apps from "./component/Contextcall";
import Memo from "./component/Memo";
import { ClassNames } from "@emotion/react";
import ClassTimer, { FocusInput, HookTimer } from "./component/UseRef";
import DocTitleOne, { DocTitleTwo } from "./component/Usedocumenttitle";
import CounterOne, { CounterTwo } from "./component/Usecounter";
import Useinput from "./component/Useinput";
import Renderusestate from "./component/Renderusestate";
import Usereducer from "./component/Usereducer";
import Immutability, { Immutability2 } from "./component/Immutability";
import Parentchild, { Child } from "./component/Parentchild";
import Sameelement, { Grandparent, Sameelement1 } from "./component/Sameelement";
import Memoreact from "./component/Memoreact";
import Incorrectmemo from "./component/Incorrectmemo";
import { Impure, Impure1 } from "./component/Impure";
import { Memoprops } from "./component/Memoprops";
import { Callbackmemo } from "./component/Callbackmemo";
import { Contextpandc } from "./component/Contextpandc";
export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    // <div className="App">
    //   <UserContext.Provider value={'Menagadevi'}> 
    //   <ChannelContext.Provider value={'Codevolution'}>
    //   <ContextA/>
    //   </ChannelContext.Provider>
    //   </UserContext.Provider>
    //   </div>
    <div>
      <Contextpandc/>
      {/* <Callbackmemo/> */}
      {/* <Memoprops/> */}
      {/* <Impure/> */}
      {/* <Incorrectmemo/>  */}
      {/* <Memoreact/> */}
    {/* <Grandparent/> */}
      {/* <Parentchild/>
      <Child/> */}
      {/* <Immutability2/> */}
      {/* <Immutability/> */}
      {/* <Usereducer/> */}
      {/* <Renderusestate/> */}
     {/* <Useinput/> */}
     {/* <CounterOne/>
      <CounterTwo/> */}
     {/* <DocTitleOne/>
     <DocTitleTwo/> */}
      {/* <ClassTimer/>
      <FocusInput/>
      <HookTimer/> */}
      {/* <Memo/> */}
      {/* <Apps/> */}
      {/* <Fetchusered2/> */}
      {/* <Fetchusered/> */}
      {/* <MultipleReducer/> */}
      {/* <Reducercomplex/> */}
      {/* <UseReducersimple/> */}
      {/* <Fetching/> */}
      {/* <Useeffect/> */}
      {/* <Setstate/>
      <Setstate1/> */}
      {/* <Crud/> */}
      {/* <Count
      render ={(count,incrementCount) =>(
        <Renderprops count={count} incrementCount ={incrementCount}/>
      )}
      />
       <Count
      render ={(count,incrementCount) =>(
       <Hover count={count} incrementCount ={incrementCount}/>
     )}
     /> *
       {/* <Renderprops/>
       <Hover />
      <Props2 render={(isLoggedIn) => isLoggedIn ? 'menaga' : 'guest'}/> */}
      {/* <Parentcomp/>
      <Demo/> */}
      
{/* <Login/>  */}
{/* <LoginPage/> */}
{/* <BrowserRouter>
       <Routes>
        <Route path="/" element={<LoginPage />} />
          <Route path='/Home/:dates' element={<Home />} /> */}
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
         <Route path="*" element={<NoPage />} /> 
       </Route> */}
       {/* </Routes>
       </BrowserRouter> */}
</div>
  );
} 
export default App; 






// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const apiUrl = 'https://6594e34f04335332df819ddb.mockapi.io/employee';

// const App = () => {
//   const [posts, setPosts] = useState([]);
//   const [newPost, setNewPost] = useState({ title: '', body: '' });

//   // Fetch posts from the API
//   useEffect(() => {
//     axios.get(apiUrl)
//       .then((response) => {
//         setPosts(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   // Function to add a new post
//   const addPost = () => {
//     axios.post(apiUrl, newPost)
//       .then((response) => {
//         setPosts([...posts, response.data]);
//         setNewPost({ title: '', body: '' });
//       })
//       .catch((error) => {
//         console.error('Error adding post:', error);
//       });
//   };

//   // Function to delete a post
//   const deletePost = (id) => {
//     axios.delete(`${apiUrl}/${id}`)
//       .then(() => {
//         const updatedPosts = posts.filter((post) => post.id !== id);
//         setPosts(updatedPosts);
//       })
//       .catch((error) => {
//         console.error('Error deleting post:', error);
//       });
//   };

//   return (
//     <div>
//       <h1>Posts</h1>
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>
//             <span>{post.title}</span>
//             <button onClick={() => deletePost(post.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//       <h2>Add New Post</h2>
//       <input
//         type="text"
//         placeholder="Title"
//         value={newPost.title}
//         onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
//       />
//       <input
//         type="text"
//         placeholder="Body"
//         value={newPost.body}
//         onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
//       />
//       <button onClick={addPost}>Add Post</button>
//     </div>
//   );
// };

// export default App;
