// import React from 'react'
// import { createBrowserRouter,RouterProvider  } from 'react-router-dom'
// import Login from './Login'
// import Browse from './Browse'
// import { onAuthStateChanged } from "firebase/auth";
// // import {useDispatch} from 'react-redux';
// // import { useEffect } from 'react';
// // import {auth} from '../utils/Firebase'
// // import { addUser, removeUser } from '../utils/userSlice'; 


// const Body = () => {
//     // const dispatch = useDispatch();


//     const appRouter = createBrowserRouter([

//         {
//             'path': '/',
//             'element': <Login />,
//         },
//         {
//             'path': '/browse',
//             'element': <Browse />,
//         }
//     ]);

//     useEffect(()=>{
//         onAuthStateChanged(auth, (user) => {
//             if (user) {
//                 // User is signed in 
//               const {uid,email,displayName,photoURL}= user;
//               dispatch(addUser({
//                  uid: uid,
//                  email: email,
//                  displayName: displayName,
//                  photoURL: photoURL}));
//             } else {
//               // User is signed out
//               dispatch(removeUser());
//             }
//           });

//     },[]);  



//     return (
//         <div>
//             <RouterProvider router={appRouter} />
//         </div>
//     )
// }

// export default Body;

import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { auth } from '../utils/Firebase'
import { addUser, removeUser } from '../utils/userSlice';

const Body = () => {
  const dispatch = useDispatch();
  
  const appRouter = createBrowserRouter([
    {
      'path': '/',
      'element': <Login />,
    },
    {
      'path': '/browse',
      'element': <Browse />,
    }
  ]);
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL: photoURL
        }));
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
    
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [dispatch]);
  
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body;