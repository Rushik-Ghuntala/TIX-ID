import { createSlice } from "@reduxjs/toolkit";



export const LoginSlice = createSlice({
    name: "login",
    initialState:{
        isLoggedIn: false,
        userData: {}
    },
    reducers: {
        userLogin: (state, action) => {
            state.isLoggedIn = true;
            state.userData = action.payload;
        },
        userLogout: (state) => {
            state.isLoggedIn = false;
            state.userData = {};
        },
    }
})

export const {userLogin, userLogout} = LoginSlice.actions;

export default LoginSlice.reducer;

