import { useState, useRef } from "react";
import { BG_URL } from "../utils/constants";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import { createUserWithEmailAndPassword,
         signInWithEmailAndPassword,
         updateProfile } 
        from "firebase/auth";
import{ auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom";

const Login = () => {

  const[isSignInForm, setIsSignForm] = useState(true);
  const[errorMeassage, setErrorMeassage] = useState(null);
  const navigate = useNavigate();

  const name = useRef(null)
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () =>{
    const message = checkValidateData( email.current.value,password.current.value,);
    setErrorMeassage(message);
    if(message) return;
    
    if (!isSignInForm){
      createUserWithEmailAndPassword(auth, 
        email.current.value,
        password.current.value)

        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value
          }).then(() => {
            navigate("/browse");
          }).catch((error) => {
            setErrorMeassage(error.message)
          });
         
           
      // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMeassage(errorCode + ":" + errorMessage);
        // ..
      });

    }
    else{
      signInWithEmailAndPassword(auth,
        email.current.value,
        password.current.value)

        .then((userCredential) => {
         // Signed in 
        const user = userCredential.user;
        console.log(user);
        navigate("/browse")
        
         // ...
       })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMeassage(errorCode + ":" + errorMessage);
    });

    }

  };

  const toggleSignInForm = () =>{
    setIsSignForm(!isSignInForm);
  };

  return (
    <div >
        <Header />
        <div className="absolute">
            <img
            src={BG_URL}
            alt="logo" />


        </div>
        <form
         onSubmit={(e) => e.preventDefault()}
         className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-80">
            <h1 className="font-bold text-3xl py-4 text-white" >
              {isSignInForm? "Sign In":"Sign Up"}</h1>

            {!isSignInForm && (
              <input
              ref={name}
              type="text"
              placeholder="Name"
              className="p-4 my-4 w-full bg-gray-600" />)}

            <input
              ref={email}
              type="text"
              placeholder="Email Address"
              className="p-4 my-4 w-full bg-gray-600" />

            <input 
              ref = {password}
              type="password" 
              placeholder="Password" 
              className="p-4 my-4 w-full  bg-gray-600" />


            <p className="font-bold text-red-500 p-4">{errorMeassage}</p>

            <button className="p-4  my-6 bg-red-600 rounded-lg w-full" onClick={handleButtonClick}>{isSignInForm? "Sign In":"Sign Up"}</button>

            <p className="p-4 my-4 text-white">{isSignInForm?"New to Netflix ?":"Alredy Register ?"}
              <span className="text-red-500 cursor-pointer" onClick={toggleSignInForm}> {isSignInForm? "Sign Up":"Sign In"}</span> </p>
        </form>
    </div>
    
  )
}

export default Login