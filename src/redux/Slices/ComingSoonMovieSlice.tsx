import { createSlice } from "@reduxjs/toolkit";
import { ComingSoonMovies } from "../../data";
import { showComingSoonMovie } from "../Thunk/ComingSoonMovie";

interface InitialStateProps{
    comingSoonMovieData: ComingSoonMovies[],
    loading: boolean,
    error: String,
}


export const ComingSoonMovieSlice = createSlice({
    name:'comingSoonMovie',
    initialState: {
        comingSoonMovieData: [],
        loading: false,
        error: "",
    } as InitialStateProps,
    reducers: {
        showAllData: (state) => {
            // state.loading = false;
            console.log("state.comingSoonMovieData: ", state.comingSoonMovieData)
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(showComingSoonMovie.pending, (state) => {
            state.loading = true;
        })
        .addCase(showComingSoonMovie.fulfilled, (state, action) => {
            state.loading = false;
            // state.moviesData = state.moviesData.concat(action.payload);
            // const data = (action.payload);
            state.comingSoonMovieData = action.payload;
        })
        .addCase(showComingSoonMovie.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        })
    }
})

export const {} = ComingSoonMovieSlice.actions;

export default  ComingSoonMovieSlice.reducer;



