import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { BG_IMG, USER } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true)
  const [errorMessage, seterrorMessage] = useState(null)
  const navigate = useNavigate();
  const email = useRef(null)
  const password = useRef(null)
  const uName = useRef(null)

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
          updateProfile(userCredential.user, {
            displayName: uName.current.value, photoURL: USER
          }).then(() => {
            navigate("/browse")
          }).catch((error) => {
            seterrorMessage(error)
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + " - " + errorMessage)
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
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
        <img src={BG_IMG} />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="absolute w-4/12 p-12 bg-black/60 my-30 mx-auto right-0 left-0 text-white rounded-lg">
        <h1 className="font-bold text-3xl">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input
          ref={uName}
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
        <button onClick={handleButtonClick} className="cursor-pointer p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer py-4" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix?Sign up now." : "Already registered?Sign in now."}</p>
      </form>
    </div>
  );
};

export default Login;
