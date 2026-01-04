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
import ErrorPage from '../Page/ErrorPage';
import Faq from '../Page/Faq';
import TermsAndCondition from '../Page/TermsAndCondition';
import PrivecyPolicy from '../Page/PrivecyPolicy';
import AboutUs from '../Page/AboutUs';
import Blog from '../Page/Blog';
import Contact from '../Page/Contact';


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
         <AddProperties />
        </Privetrouter>
      },
      {
        path: '/update-property/:id',
        element: <Privetrouter>
          <UpdateProperty />
        </Privetrouter>
      },
      {
        path: '/all-property',
        element: <AllProperties />
        
      },
      {
        path: '/my-property',
        element: <Privetrouter>
         <MyProperty />
        </Privetrouter>
      },
      {
        path: '/my-rating',
        element : <Privetrouter>
         <MyRatings />
        </Privetrouter>
      },
      {
        path:'/login',
        element: <Login />
      },
      {
        path: '/regestar',
        element: <Regester />
      },
      {
        path: '/details/:id',
        element: <PropertyDetails />
      },
      {
        path: '/faq',
        element: <Faq />
      },
      {
        path: '/terms-condition',
        element: <TermsAndCondition />
      },
      {
        path: '/privacy-policy',
        element: <PrivecyPolicy />
      },
      {
        path: '/about',
        element: <AboutUs />
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      { 
     path: '*', 
      element: <ErrorPage/> 
    },



    ]
  },
]);