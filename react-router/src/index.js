import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './components/Layout'
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/contactUs/Contact';
import User from './components/User/User';
import Github2 from './components/Github2/Github2';
// import { githubInfoLoader } from './components/Github2/gitApi';

// const router=createBrowserRouter([
//   {
//     path:'/',
//     element: <Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])
const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
     <Route path='' element= {<Home/>}/>
     <Route path='About' element={<About/>}/>
     <Route path='contact' element={<Contact/>}/>
     <Route path='user/:id' element={<User/>}/> 
     <Route  //  loader={githubInfoLoader}
     path='GitHub2' 
     element={<Github2/>}/>
    </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
