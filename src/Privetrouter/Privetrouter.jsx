import React, { use } from 'react';
import { AuthContext } from '../Authorization/AuthContext';
import { Navigate, useLocation } from 'react-router';
import { Circles } from 'react-loader-spinner';

const Privetrouter = ({children}) => {

const {user, loading} = use(AuthContext)
const location = useLocation()

if(loading){
<Circles height="50" width="50" color="#FF5A3C"/>
}
if(!user){
  return  <Navigate to={'/login'} state={location.pathname}></Navigate>
}


    return children
};

export default Privetrouter;