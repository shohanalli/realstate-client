import { House } from 'lucide-react';
import React, { use, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Authorization/AuthContext';


const Header = () => {
const {user, setUser, signoutUserFun} = use(AuthContext)
  const [hover, setHover] = useState(false);

 const handleSignOut = () =>{
    signoutUserFun()
        .then(() => {
          setUser(null)
        console.log("User signed out");
      })
      .catch((err) => console.log(err));
 }



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
    { !user ?(<Link to={'/login'} className="btn  my-button">SingUp/LogIn</Link>) :
     
(
 <div
            className="relative"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <img
              src={user?.photoURL || "https://i.ibb.co.com/spx4GtRN/login.jpg"}
              alt="User"
              className="w-12 h-12 rounded-full border-2 border-[var(--primary-color)] cursor-pointer"
            />

            {hover && (
              <div className="absolute right-0 w-auto bg-white shadow-lg rounded-xl p-3 text-gray-800 z-10">
                <p className="text-center font-medium">
                  {user?.displayName || "User"}
                </p>
                <p className="text-center  font-medium ">
                  {user?.email || "User"}
                </p>
                <button
                  onClick={handleSignOut}
                  className="btn btn-sm mt-2 w-full bg-[var(--primary-color)] text-white"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
  )
    }
    
  </div>
</div>
        </div>
    );
};

export default Header;