import React from 'react'
import Body from './Body'
import Header from './Header'
import { useState } from 'react'
import { useRef } from 'react'
import { checkValidData } from '../utils/Validate'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const email = useRef(null);
  const password = useRef(null);


  const handleButtonClick = () => {
    //validate the form data
    console.log(email.current.value);
    console.log(password.current.value);

       const message= checkValidData(email.current.value, password.current.value);
       console.log(message);




  }

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
          {isSignInForm ? "Sign In" : " Sign Up"}
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
