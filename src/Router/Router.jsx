import React from 'react';
import { createBrowserRouter } from "react-router";
import Layout from '../Layout/Layout';
import Home from '../Page/Home';
import AddProperties from '../Page/AddProperties';
import AllProperties from '../Page/AllProperties';
import MyProperty from '../Page/MyProperty';
import MyRatings from '../Page/MyRatings';
import Login from '../Page/Login';
import Regester from '../Page/Regester';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children : [
      {
        index: true,
        element : <Home></Home>
      },
      {
        path: '/add-property',
        element: <AddProperties></AddProperties>
        
      },
      {
        path: '/all-property',
        element: <AllProperties></AllProperties>
        
      },
      {
        path: '/my-property',
        element: <MyProperty></MyProperty>
        
      },
      {
        path: '/my-rating',
        element : <MyRatings></MyRatings>
        
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path: '/regestar',
        element: <Regester></Regester>
      }



    ]
  },



]);