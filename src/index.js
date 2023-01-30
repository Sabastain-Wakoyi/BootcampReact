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
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
