import { createSlice } from '@reduxjs/toolkit';
//import jwt_decode from "jwt-decode";

export const slice = createSlice({
  name: 'vrit',
  initialState: {
    loggedIn: localStorage.getItem('jwt-token') ? true: false,
    role: localStorage.getItem('jwt-token') ? 'admin':''
  },
  reducers: {
    updateSession: (state, action) => {
      Object.assign(state, {loggedIn :action.payload.loggedIn});
      return state;
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateSession } = slice.actions

const reducer = slice.reducer;

export default reducer;