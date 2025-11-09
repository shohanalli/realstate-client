import React from 'react';
import { createBrowserRouter } from "react-router";
import Layout from '../Layout/Layout';
import Home from '../Page/Home';


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

        
      }
    ]
  },



]);