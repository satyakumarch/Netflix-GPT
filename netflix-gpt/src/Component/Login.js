import React from 'react'
import Header from './Header'
import { useRef } from 'react'
import { useState } from 'react'
import { checkValidData } from '../utils/Validate'
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/Firebase'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [Errormessage, setErrormessage] = useState(null);

  const name=useRef(null);
  const email = useRef(null);
  const password = useRef(null);


  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrormessage(message);
    if (message) return;

    if (!isSignInForm) {
      //Sign up logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrormessage(errorCode + "  " + errorMessage)
          // ..
        });
    } else {
      //sign  in logic
      signInWithEmailAndPassword
       (
         auth,
         email.current.value,
         password.current.value
        )
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrormessage(errorCode + "  " + errorMessage)
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div>
        <img className='w-full h-screen object-cover'
          src="./background.jpg" alt='logo'></img>
      </div>
      <form onSubmit={(e) => e.preventDefault()}
        className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white top-5 bg-opacity-80' >
        <h1 className='font-bold text-3xl py-4 '>
          {isSignInForm ? "Sign Up" : " Sign In"}
        </h1>
        {isSignInForm && <input type="text"
          placeholder='Full Name'
          className='p-4 my-4 w-full bg-gray-600' />}

        <input
          ref={email}
          type="text"
          placeholder='Email Address'
          className='p-4 my-4 w-full bg-gray-600' />

        <input
          ref={password}
          type="password"
          placeholder='password'
          className='p-4 my-4 w-full bg-gray-600' />

        <p className='text-red-700  font-bold'>{Errormessage}</p>

        <button className='p-4 my-4 bg-red-700 w-full rounded-lg'
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : " Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix? " : " Already registered Sign In Now..."}</p>
      </form>
    </div>
  )
}

export default Login
