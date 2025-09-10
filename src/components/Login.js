import React, { use, useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true)
  const [errorMessage, seterrorMessage] = useState(null)
  const navigate = useNavigate();
  const email = useRef(null)
  const password = useRef(null)
  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm)
  }
  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value)
    seterrorMessage(message)
    if (message) return;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // const user = userCredential.user;
          // updateProfile(user, {
          //   displayName: email.current.value, photoURL: "https://avatars.githubusercontent.com/u/110252895?v=4"
          // }).then(() => {
            navigate("/browse")
          // }).catch((error) => {
          //   seterrorMessage(errorCode + " - " + errorMessage)
          // });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + " - " + errorMessage)
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/browse")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + " - " + errorMessage)

        });
    }
  }
  return (
    <div>
      <div className='absolute'>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black"></div>
        <Header />
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/8d617e19-3c3c-4c28-8998-c9b14dbc7200/web/IN-en-20250901-TRIFECTA-perspective_48d84d4e-9558-46b8-a0f3-8b2dc8478431_large.jpg" />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="absolute w-4/12 p-12 bg-black/60 my-30 mx-auto right-0 left-0 text-white rounded-lg">
        <h1 className="font-bold text-3xl">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input
          type="text"
          placeholder="Full Name"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        ></input>}
        <input
          ref={email}
          type="text"
          placeholder="Email or mobile number"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        ></input>
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        ></input>
        <p className="text-red-600 text-sm">{errorMessage}</p>
        <button onClick={handleButtonClick} className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix?Sign up now." : "Already registered?Sign in now."}</p>
      </form>
    </div>
  );
};

export default Login;
