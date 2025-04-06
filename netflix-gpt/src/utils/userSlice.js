// import { createSlice } from "@reduxjs/toolkit";

// const userSlice = createSlice({
//     name:"user",
//     initialState:null,
//     reducers:{
//         addUser:(state,action)=>{
//             return action.payload;
//         },
//         removeUser:(state,action)=>{
//             return null;
//         },
//     },
     
// });

// export const {addUser,removeUser}=userSlice.actions;
// export default userSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    uid: null,
    email: null,
    displayName: null
  },
  reducers: {
    addUser: (state, action) => {
      state.uid = action.payload.uid;
      state.email = action.payload.email;
      state.displayName = action.payload.displayName;
    },
    removeUser: (state) => {
      state.uid = null;
      state.email = null;
      state.displayName = null;
    }
  }
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;