import { createSlice } from "@reduxjs/toolkit";
import { TheaterData } from "../../data";
import { showTheaterData } from "../Thunk/TheaterThunk";

interface InitialStateProps {
  theaterData: TheaterData[];
  loading: boolean;
  error: string;
}

export const TheaterSlice = createSlice({
  name: "theater",
  initialState: {
    theaterData: [],
    loading: false,
    error: "",
  } as InitialStateProps,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(showTheaterData.pending, (state) => {
        state.loading = true;
      })
      .addCase(showTheaterData.fulfilled, (state, action) => {
        state.loading = false;
        // state.moviesData = state.moviesData.concat(action.payload);
        // const data = (action.payload);
        state.theaterData = action.payload;
      })
      .addCase(showTheaterData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const {} = TheaterSlice.actions;

export default TheaterSlice.reducer;
