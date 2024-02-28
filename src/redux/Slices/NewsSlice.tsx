import { createSlice } from "@reduxjs/toolkit";
import { NewsData } from "../../data";
import { showNewsData } from "../Thunk/NewsThunk";

interface InitialStateProps{
    newsData: NewsData[],
    loading: boolean,
    error: string,
}


export const NewsSlice = createSlice({
    name:"news",
    initialState: {
        newsData: [],
        loading: false,
        error: "",
    } as InitialStateProps,
    reducers: {
        showAllData: (state) => {
            // state.loading = false;
            console.log("state.moviesData", state.newsData)
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(showNewsData.pending, (state) => {
            state.loading = true;
        })
        .addCase(showNewsData.fulfilled, (state, action) => {
            state.loading = false;
            // state.moviesData = state.moviesData.concat(action.payload);
            // const data = (action.payload);
            state.newsData = action.payload;
        })
        .addCase(showNewsData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        })
    }
}) 


export const {} = NewsSlice.actions;

export default NewsSlice.reducer;




