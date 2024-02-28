import { createSlice } from "@reduxjs/toolkit";
import { showMoviesData } from "../Thunk/MoviesThunk";
import { MoviesData } from "../../data-API/movies-data";

export interface MovieSliceProps {
  moviesData: MoviesData[];
  loading: boolean;
  error: String;
}

export const MoviesSlice = createSlice({
  name: "movies",
  initialState: {
    moviesData: [],
    loading: false,
    error: "",
  } as MovieSliceProps,
  reducers: {
    showAllData: (state) => {
      // state.loading = false;
      console.log("state.moviesData", state.moviesData);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(showMoviesData.pending, (state) => {
        state.loading = true;
      })
      .addCase(showMoviesData.fulfilled, (state, action) => {
        state.loading = false;
        // state.moviesData = state.moviesData.concat(action.payload);
        // const data = (action.payload);
        state.moviesData = action.payload;
      })
      .addCase(showMoviesData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { showAllData } = MoviesSlice.actions;

export default MoviesSlice.reducer;
