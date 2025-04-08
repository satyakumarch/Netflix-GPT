// import React from 'react'
// import { signOut } from "firebase/auth";
// import { useNavigate } from 'react-router-dom';
// import { auth } from '../utils/Firebase';
// import { useSelector } from 'react-redux';

// const Header = () => {
  
//   const navigate = useNavigate();
//   const user=useSelector((store)=>store.user);
  
   

//   const handleSignOut=()=>{
// signOut(auth)
// .then(() => {
//   navigate("/");
//   // Sign-out successful.
// })
// .catch((error) => {
//   // An error happened.
//   navigate("/error");
// });
//     };
//   return (
//     <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-30 flex justify-between'>
     
//       <img className='w-44'
//         src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
//        alt="logo" />

//      {user && ( <div className=' p-2 flex justify-between' >
//         <img className='w-12 h-12 '
//           src={user?.photoURL} />
//         <button onClick={handleSignOut} className='  font-bold text-white'>
//           (Sign Out)
//           </button>
//       </div>
//      )}
//     </div>

//   )
// }

// export default Header
import React from 'react'
import { signOut } from "firebase/auth"
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/Firebase'
import { useSelector } from 'react-redux'

const Header = () => {
  const navigate = useNavigate()
  const user = useSelector((store) => store.user)
  
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful
        navigate("/")
      })
      .catch((error) => {
        // An error happened
        console.error("Sign out error:", error)
        // Only navigate to error if you have an error page
        // navigate("/error")
      })
  }
  
  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-30 flex justify-between items-center'>
      <img className='w-44'
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo" />
      
      {user && (
        <div className='flex items-center gap-3'>
          {user.photoURL && (
            <img 
              className='w-10 h-10 rounded-full' 
              src={user.photoURL}
              alt="User profile"
            />
          )}
          <button 
            onClick={handleSignOut} 
            className='py-1 px-3 bg-red-600 text-white rounded hover:bg-red-700'
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  )
}

export default Header