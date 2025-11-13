import React, { use, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../Authorization/AuthContext";
import Loading from "../Component/Loading";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { signInWithEmailAndPasswordFunc, signInWithGoogleFun, user, setUser } =
    use(AuthContext);
  const location = useLocation();
  const form = location.state || "/";
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate(form);
    }
  }, [user, navigate, form]);
  const handelSignin = (e) => {
    e.preventDefault();
    setLoading(true);
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPasswordFunc(email, password)
      .then((res) => {
        setUser(res.user);
        setLoading(false);
        toast.success("login successfully");
        navigate(form);
      })
      .catch((errr) => {
        toast.error(errr.message);
      });
  };

  const handelContinueGoogle = () => {
    setLoading(true);
    signInWithGoogleFun()
      .then((res) => {
        setUser(res.user);
        setLoading(false);
        toast.success("login successfully");
        console.log(res.user);
        navigate(form);
      })
      .catch((errr) => {
        toast.error(errr.message);
      });
  };
  if (loading) return <Loading />;
  return (
    <div className=" bg-[#F2F6F7] py-15 flex flex-col items-center justify-center">
      <div className="py-5 space-y-6 mb-5">
        <h1 className="text-3xl md:text-5xl text-[var(--color-text)] font-extrabold text-center leading-snug">
          Sign In <br />
          To Your Account
        </h1>
        <p className="text-center text-black/50">
          Access your personalized dashboard securely by signing <br /> in to
          your account today.
        </p>
      </div>
      <div className="md:flex items-center  gap-15">
        <div className=" border border-white/30 shadow-xl rounded-2xl p-8">
          <form onSubmit={handelSignin} className="space-y-5 ">
            <div>
              <label className="block text-base mb-1 text-black/50">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="example@email.com"
                className="input input-bordered w-full bg-white/20 placeholder-black/30 focus:outline-none focus:ring-2 focus:[#071C1F]"
              />
            </div>
            <div className="relative">
              <label className="block text-base mb-1 text-black/50">
                Password
              </label>
              <input
                type={"password"}
                name="password"
                placeholder="******"
                className="input input-bordered w-full bg-white/20 placeholder-black/30 focus:outline-none focus:ring-2 focus:[#FF5A3C]"
              />
            </div>
            <button
              type="submit"
              className="my-button py-4 px-10 cursor-pointer"
            >
              Login
            </button>{" "}
            <br />
            <button
              className="hover:underline cursor-pointer text-black"
              type="button"
            >
              Forget password?
            </button>
            <div className="flex items-center justify-center gap-2 my-2">
              <div className="h-px w-16 bg-white/30"></div>
              <span className="text-sm text-white/70">or</span>
              <div className="h-px w-16 bg-white/30"></div>
            </div>
            <button
              onClick={handelContinueGoogle}
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
        </div>
        <div className="mt-10 md:mt-0">
          <h1 className="mb-8 text-2xl font-bold text-gray-800">
            DON'T HAVE AN ACCOUNT?
          </h1>
          <Link to="/regestar" className=" my-button py-5 px-10">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
