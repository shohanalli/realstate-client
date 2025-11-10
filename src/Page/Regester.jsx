
import React, { useState } from 'react';
import { Link } from 'react-router';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/Firebase.config';
import { toast } from 'react-toastify';
const Regester = () => {

const handelSubmit = (e) =>{
    const [show , setShow] = useState(false)
    e.preventDefault()
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

// regex and set password
 const regExp =/^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!regExp.test(password)) {
      toast.error("Password must have uppercase, lowercase & min 6 chars");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
    .then(res => {
        toast.success("register successfully")
        console.log(res)
    })
    .catch(err => {
        toast.error(err.message)
    })
}






    return (
    <div className=" bg-[#F2F6F7] py-15 flex flex-col items-center justify-center">
        <div className='py-5 space-y-6 mb-5'>
            <h1 className='text-3xl md:text-5xl text-[var(--color-text)] font-extrabold text-center leading-snug' >Register <br/>Your Account</h1>
            <p className='text-center text-black/50'>Access your personalized dashboard securely by signing <br /> in to your account today.</p>
        </div>

         <div className="max-w-11/12 md:w-6/12 border border-white/30 shadow-xl rounded-2xl p-8">
                <form onSubmit={handelSubmit}  className="space-y-5">
              <div>
                <label className="block text-base mb-1 text-black/50">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Shohan Ali"
                  className="input input-bordered w-full bg-white/20  placeholder-black/30 focus:outline-none focus:ring-2 focus:[#071C1F]"
                />
              </div>
              <div>
                <label className="block text-base mb-1 text-black/50">Photo</label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Your photo URL here"
                  className="input input-bordered w-full bg-white/20 placeholder-black/30 focus:outline-none focus:ring-2 focus:[#071C1F]"
                />
              </div>

              <div>
                <label className="block text-base mb-1 text-black/50">Email</label>
                <input
                  type="email"
                  name="email"            
                  placeholder="example@email.com"
                  className="input input-bordered w-full bg-white/20  placeholder-black/30 focus:outline-none  focus:[#071C1F]"
                />
              </div>
              <div className="relative">
                <label className="block text-base mb-1 text-black/50">
                  Password
                </label>
                <input
                  type={ "password"}
                  name="password"
                  placeholder="******"
                  className="input input-bordered w-full bg-white/20  placeholder-black/30 focus:outline-none focus:[#FF5A3C]"
                />
                       
              </div>
                <button type="submit" className="my-button py-4 px-10 cursor-pointer">
                Register
              </button> <br />  

        
              <div className="flex items-center justify-center gap-2 my-2">
                <div className="h-px w-16 bg-white/30"></div>
                <span className="text-sm text-white/70">or</span>
                <div className="h-px w-16 bg-white/30"></div>
              </div>
              <button 
                          
                type="button"
                className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="google"
                  className="w-5 h-5"
                />
                Continue with Google
              </button>
            </form>
                          <div className="text-center mt-6">
                <p className="text-xl text-black/70">
                  Already have an account?
                  <Link
                    to="/login"
                    className=" text-[var(--color-text)] hover:text-[var(--primary-color)] font-medium underline"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
          </div>   


    </div>
    );
};

export default Regester;