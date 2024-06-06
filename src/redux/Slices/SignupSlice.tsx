// /redux/Slices/SignupSlice.tsx
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SignupState {
  userData: {
    name?: string;
    email?: string;
    telNumber?: string;
    password?: string;
    [key: string]: any;
  };
}

const initialState: SignupState = {
  userData: {},
};

export const SignupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    userSignup: (state, action: PayloadAction<SignupState["userData"]>) => {
      state.userData = action.payload;
    },
  },
});

export const { userSignup } = SignupSlice.actions;
export default SignupSlice.reducer;
