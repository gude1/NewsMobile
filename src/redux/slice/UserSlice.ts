import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export type UserState = {
  fullname?: string;
  email?: string;
  phone?: string;
  image?: string;
  loggedIn?: boolean;
  dark?: boolean;
};

const initialState: UserState = {
  fullname: '',
  email: '',
  phone: '',
  image: '',
  theme: false,
  loggedIn: false,
};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state: UserState, action: PayloadAction<UserState>) => {
      return {...state, ...action.payload};
    },
  },
});

// Action creators are generated for each case reducer function
export const {setUser} = UserSlice.actions;

export default UserSlice.reducer;
