

import { House } from 'lucide-react';
import React from 'react';
import { Link, NavLink } from 'react-router';

const Header = () => {
      const navLinks = (
        <>
        <NavLink className={ 'hover:text-[var(--primary-color)]'} to={'/'}>Home</NavLink>
        <NavLink className={ 'hover:text-[var(--primary-color)]'} to={'/service'}> Services</NavLink>
        <NavLink className={ 'hover:text-[var(--primary-color)]'} to={'/service'}>My Profile</NavLink>
        </>
      )
  
    return (
        <div className=' bg-base-100 shadow-sm py-2'>
            <div className="navbar w-[97] lg:w-[95%] mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabindex="0" role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabindex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {navLinks}
      </ul>
    </div>
    <div className='flex gap-2 items-center justify-center'>
        <a href="" className='hidden md:block'><House size={50} color="#FF5A3C" /></a>
         <a className="text-3xl font-extrabold text-[var(--color-text)]"> RENTER</a>
         </div>
   
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className=" flex gap-3 font-semibold text-[var(--color-text)]">
{navLinks}
    </ul>
  </div>
  <div className="navbar-end">
      <Link className="btn  my-button">SingUp/LogIn</Link>
  </div>
</div>
        </div>
    );
};

export default Header;