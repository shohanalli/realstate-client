

import { House } from 'lucide-react';
import React from 'react';
import { Link, NavLink } from 'react-router';

const Header = () => {
      const navLinks = (
        <>
        <NavLink className={ 'navLInk'} to={'/'}>Home</NavLink>
        <NavLink className={ 'navLInk'} to={'/all-property'}>All Properties</NavLink>
        <NavLink className={ 'navLInk'} to={'/add-property'}>Add Properties</NavLink>
        <NavLink className={ 'navLInk'} to={'/my-property'}>My Properties</NavLink>
        <NavLink className={ 'navLInk'} to={'/my-rating'}>My Ratings</NavLink>
        </>
      )
  
    return (
        <div className=' bg-base-100 shadow-sm py-2'>
            <div className="navbar w-[97] lg:w-[95%] mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
    </svg>
  </label>
  <ul
    tabIndex={0}
    className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white text-xl font-semibold space-y-5  rounded-box w-52"
  >
            {navLinks}
      </ul>
    </div>
    <div className='flex gap-2 items-center justify-center '>
        <a href="./" className='hidden md:block'><House size={50} color="#FF5A3C" /></a>
         <a href="./" className="text-3xl font-extrabold text-[var(--color-text)]"> RENTER</a>
         </div>
   
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className=" flex gap-5 font-semibold text-[15px] text-[var(--color-text)]">
{navLinks}
    </ul>
  </div>
  <div className="navbar-end">
      <Link to={'/login'} className="btn  my-button">SingUp/LogIn</Link>
  </div>
</div>
        </div>
    );
};

export default Header;