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
import Privetrouter from '../Privetrouter/Privetrouter';
import PropertyDetails from '../Page/PropertyDetails';
import UpdateProperty from '../Page/UpdateProperty';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children : [
      {
        index: true,
        element : <Home></Home>,
        
      },
      {
        path: '/add-property',
        element: <Privetrouter>
         <AddProperties></AddProperties>
        </Privetrouter>
      },
      {
        path: '/update-property/:id',
        element: <Privetrouter>
          <UpdateProperty></UpdateProperty>
        </Privetrouter>
      },
      {
        path: '/all-property',
        element: <AllProperties></AllProperties>
        
      },
      {
        path: '/my-property',
        element: <Privetrouter>
         <MyProperty></MyProperty>
        </Privetrouter>
      },
      {
        path: '/my-rating',
        element : <Privetrouter>
         <MyRatings></MyRatings>
        </Privetrouter>
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path: '/regestar',
        element: <Regester></Regester>
      },
      {
        path: '/details/:id',
        element: <Privetrouter>
                   <PropertyDetails></PropertyDetails>
        </Privetrouter>

      },
      {
        
      }



    ]
  },



]);