import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export type UserState = {
  fullname?: string;
  email?: string;
  phone?: string;
  image?: string;
  loggedIn?: boolean;
};

const initialState: UserState = {
  fullname: '',
  email: '',
  phone: '',
  image: '',
  loggedIn: false,
};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state: UserState, action: PayloadAction<UserState>) => {
      return {...state, ...action.payload};
      // state.fullname = action.payload.fullname || state.fullname;
      // state.email = action.payload.email || state.email;
      // state.phone = action.payload.phone || state.phone;
      // state.loggedIn = action.payload.loggedIn || state.loggedIn;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setUser} = UserSlice.actions;

export default UserSlice.reducer;
