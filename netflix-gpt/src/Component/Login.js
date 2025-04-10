// import React from 'react'
// import Header from './Header'
// import { useRef,useState } from 'react'
// import { checkValidData } from '../utils/Validate'
// import {
//    createUserWithEmailAndPassword ,
//    signInWithEmailAndPassword,
//    updateProfile  } from "firebase/auth";
// import { auth } from '../utils/Firebase'
// import { useNavigate } from 'react-router-dom'
// // import { useDispatch } from 'react-redux';
// import { addUser } from "../utils/userSlice.js";


// const Login = () => {
//   const [isSignInForm, setIsSignInForm] = useState(true);
//   const [Errormessage, setErrormessage] = useState(null);
//   const dispatch = useDispatch();
   
 
//   const name=useRef(null);
//   const email = useRef(null); 
//   const password = useRef(null);


//   const handleButtonClick = () => {

//     // console.log(email.current.value);
//     // console.log( password.current.value);
//     //  console.log(name.current.value);
//     const message = checkValidData(email.current.value, password.current.value);
//     setErrormessage(message);

//     if (message) return;

//     if (!isSignInForm) {
//       //Sign up logic
//       createUserWithEmailAndPassword(
//         auth, 
//         email.current.value,
//         password.current.value
//       )
//         .then((userCredential) => {
//           const user = userCredential.user;
//           updateProfile(user,{
//             displayName: name.current.value , 
//              photoURL: "https://avatars.githubusercontent.com/u/118563873?v=4",
//           })
//           .then(()=>{
//             const {uid,email,displayName,photoURL}= auth.currentUser;
//             dispatch(
//               addUser({
//                 uid: uid,
//                 email: email,
//                 displayName: displayName,
//                 photoURL:photoURL,
//               })
//             );  
//             navigate("/browse");
//           })
//           .catch((error) => {
//             setErrormessage(error.message);
//           });
//         })
//         .catch((error) => {
//           const errorCode = error.code;
//           const errorMessage = error.message;
//           setErrormessage(errorCode + "  " + errorMessage)
//           // ..
//         });
//     } else {
//       //sign  in logic
//       signInWithEmailAndPassword
//        (
//          auth,
//          email.current.value,
//          password.current.value
//         )
//         .then((userCredential) => {
//           // Signed in 
//           // const user = userCredential.user;
//           // updateProfile(user, {
//           //   displayName: name.current.value , 
//           //    photoURL: "https://avatars.githubusercontent.com/u/118563873?v=4",
//           // }).then(() => {
//           //   navigate("/browse");
//           // }).catch((error) => {
//           //   setErrormessage(error.message);
//           //   // ...
//           // });
         
//         })
//         .catch((error) => {
//           const errorCode = error.code;
//           const errorMessage = error.message;
//           setErrormessage(errorCode + "  " + errorMessage)
//         });
//     }
//   };

//   const toggleSignInForm = () => {
//     setIsSignInForm(!isSignInForm);
//   };

//   return (
//     <div>
//       <Header />
//       <div>
//         <img className='w-full h-screen object-cover'
//           src="./background.jpg" alt='logo'></img>
//       </div>
//       <form onSubmit={(e) => e.preventDefault()}
//         className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white top-5 bg-opacity-80' >
//         <h1 className='font-bold text-3xl py-4 '>
//           {isSignInForm ? "Sign Up" : " Sign In"}
//         </h1>
//         {!isSignInForm && <input
//           ref={name}
//          type="text"
//           placeholder='Full Name'
//           className='p-4 my-4 w-full bg-gray-600' 
//           />}

//         <input
//           ref={email}
//           type="text"
//           placeholder='Email Address'
//           className='p-4 my-4 w-full bg-gray-600' 
//           />

//         <input
//           ref={password}
//           type="password"
//           placeholder='password'
//           className='p-4 my-4 w-full bg-gray-600'
//          />

//         <p className='text-red-700  font-bold'>{Errormessage}</p>

//         <button className='p-4 my-4 bg-red-700 w-full rounded-lg'
//           onClick={handleButtonClick}
//         >
//           {isSignInForm ? "Sign In" : " Sign Up"}</button>
//         <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
//           {isSignInForm ? "New to Netflix? " : " Already registered Sign In Now..."}</p>
//       </form>
//     </div>
//   )
// }

// export default Login


import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/Validate'
import {
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   updateProfile
} from "firebase/auth";
import { auth } from '../utils/Firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'; // Uncomment this
import { addUser } from "../utils/userSlice.js";
import { AVATAR } from '../utils/constant.js';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize navigate
 
  const name = useRef(null);
  const email = useRef(null); 
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      // Sign up logic
      createUserWithEmailAndPassword(
        auth, 
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, 
            photoURL:AVATAR,
          })
          .then(() => {
            const {uid, email, displayName, photoURL} = auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              })
            );  
            navigate("/browse");
          })
          .catch((error) => {
            setErrorMessage(error.message);
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "  " + errorMessage);
        });
    } else {
      // Sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
      .then((userCredential) => {
        // Successfully signed in
        navigate("/browse");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "  " + errorMessage);
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
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && <input
          ref={name}
          type="text"
          placeholder='Full Name'
          className='p-4 my-4 w-full bg-gray-600' 
          />}

        <input
          ref={email}
          type="text"
          placeholder='Email Address'
          className='p-4 my-4 w-full bg-gray-600' 
          />

        <input
          ref={password}
          type="password"
          placeholder='Password'
          className='p-4 my-4 w-full bg-gray-600'
         />

        <p className='text-red-700 font-bold'>{errorMessage}</p>

        <button className='p-4 my-4 bg-red-700 w-full rounded-lg'
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Login