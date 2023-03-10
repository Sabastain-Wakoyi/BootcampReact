import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
/* import App from './App';
import reportWebVitals from './reportWebVitals';
 */
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link
} from "react-router-dom"
import { Home } from './pages/HomePage';
import { Bootcamps } from './pages/Bootcamps';
import BootcampDetails from './pages/BootcampDetail'
import Api from './Components/AxiosAPIS/AxiosApis';
import Login from './Components/AxiosAPIS/Login';
import Register from './Components/Register';





const router= createBrowserRouter([

  {
    path: "/bootcamps/:bootcampId",
    element: (
        <>
          <BootcampDetails ></BootcampDetails>
          <Link to="/bootcamps/:bootcampId"></Link>
        </>
    )
  },
  {
    path: "/",
    element: (
        <>
          <Home></Home>
          <Link to="/"></Link>
        </>
    )
  },
  {
    path: "/bootcamps",
    element: (
        <>
          <Bootcamps></Bootcamps>
          <Link to="/bootcamps"></Link>
        </>
    )
  },

  {
    path: "/register",
    element: (
        <>
          <Register></Register>
          <Link to="/register"></Link>
        </>
    )
  }
  ,
  {
    path: "/contactus",
    element: (
        <>
          <Bootcamps></Bootcamps>
          <Link to="/bootcamps"></Link>
        </>
    )
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router}> </RouterProvider> 
    {/* <Api></Api> */}
    {/* <Login></Login> */}
    
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
