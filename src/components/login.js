import { useState } from "react";
import { BG_URL } from "../utils/constants";
import Header from "./Header";

const Login = () => {

  const[isSignInForm, setIsSignForm] = useState(true);

  const toggleSignInForm = () =>{
    setIsSignForm(!isSignInForm);
  };

  return (
    <div >
        <Header />
        <div className="absolute">
            <img
            src={BG_URL}
            alt="logo" 
            />
        </div>
        <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-80">
            <h1 className="font-bold text-3xl py-4 text-white" >
              {isSignInForm? "Sign In":"Sign Up"}</h1>

            {!isSignInForm && (
              <input
              type="text"
              placeholder="Name"
              className="p-4 my-4 w-full bg-gray-600" />)}

            <input
              type="text"
              placeholder="Email Address"
              className="p-4 my-4 w-full bg-gray-600" />

            <input 
              type="password" 
              placeholder="Password" 
              className="p-4 my-4 w-full  bg-gray-600" />

            <button className="p-4  my-6 bg-red-600 rounded-lg w-full">{isSignInForm? "Sign In":"Sign Up"}</button>

            <p className="p-4 my-4 text-white">{isSignInForm?"New to Netflix ?":"Alredy Register ?"}
              <span className="text-red-500 cursor-pointer" onClick={toggleSignInForm}> {isSignInForm? "Sign Up":"Sign In"}</span> </p>
        </form>
    </div>
    
  )
}

export default Login