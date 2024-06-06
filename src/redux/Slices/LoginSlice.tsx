// /redux/Slices/LoginSlice.tsx
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  isLoggedIn: boolean;
  userData: {
    name?: string;
    email?: string;
    telNumber?: string;
    password?: string;
    [key: string]: any;
  };
}

const initialState: UserState = {
  isLoggedIn: false,
  userData: {},
};

export const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    userLogin: (state, action: PayloadAction<UserState["userData"]>) => {
      state.isLoggedIn = true;
      state.userData = action.payload;
    },
    userLogout: (state) => {
      state.isLoggedIn = false;
      state.userData = {};
    },
  },
});

export const { userLogin, userLogout } = LoginSlice.actions;
export default LoginSlice.reducer;
