import React from 'react'
import Body from './Body'
import Header from './Header'
import { useState } from 'react'

const Login = () => {
  const [isSignInForm,setIsSignInForm] = useState(true);

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
      <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white top-5 bg-opacity-80' >
      <h1 className='font-bold text-3xl py-4 '>
        {isSignInForm?"Sign In" :" Sign Up"}
        </h1>
        { isSignInForm && <input type="text"
         placeholder='Full Name'
         className='p-4 my-4 w-full bg-gray-600'/>}

        <input type="text"
         placeholder='Email'
         className='p-4 my-4 w-full bg-gray-600'/>

        <input type="password"
         placeholder='password'
         className='p-4 my-4 w-full bg-gray-600'/>

        <button className='p-4 my-4 bg-red-700 w-full rounded-lg'>
          {isSignInForm?"Sign In" :" Sign Up"}</button>
    
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
          {isSignInForm?"New to Netflix? " :" Already registered Sign In Now..."}</p>
      </form>
    </div>
  )
}

export default Login
