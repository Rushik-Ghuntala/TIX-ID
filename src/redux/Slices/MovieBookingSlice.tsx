import { createSlice } from "@reduxjs/toolkit";
// import { MoviesData, TheaterData } from "../../data";

// interface MovieBookingState {
//   selectedMovie: MoviesData | null;
//   selectedTheater: TheaterData | null;
//   selectedDateTime: Date | null;
// }

const initialState = {
  selectedMovie: {},
  selectedTheater: {},
  selectedDimensionCategory: "",
  selectedTimeSlotsList: [],
  selectedDateTime: {},
  selectedSeats: [] as string[],
  selectedTime: "",
};

// interface MovieBookingState {
//   selectedMovie: MoviesData | null;
//   selectedTheater: TheaterData | null;
//   selectedDateTime: Date | null;
//   selectedSeats: string[];
// }

// const initialState: MovieBookingState = {
//   selectedMovie: null,
//   selectedTheater: null,
//   selectedDateTime: null,
//   selectedSeats: [],
// };

const movieBookingSlice = createSlice({
  name: "movieBooking",
  initialState,
  reducers: {
    setMovieData: (state, action) => {
      console.log("Slice Movie che: ", state.selectedMovie);
      state.selectedMovie = action.payload;
    },
    setTheaterData: (state, action) => {
      state.selectedTheater = action.payload.theater;
      state.selectedDateTime = action.payload.dateTime;
    },
    setSelectedSeats(state, action) {
      state.selectedSeats = action.payload;
    },
    resetMovieBooking(state) {
      state.selectedMovie = {};
      state.selectedTheater = {};
      state.selectedDateTime = {};
      state.selectedSeats = [];
      state.selectedTimeSlotsList = [];
      state.selectedTime = "";
    },
    selectTimeSlote(state, action) {
      state.selectedTimeSlotsList = action.payload;
    },
    selectTime(state, action) {
      state.selectedTime = action.payload;
    },
    selectDimension(state, action) {
      state.selectedDimensionCategory = action.payload;
    },
  },
});

export const {
  setMovieData,
  setTheaterData,
  setSelectedSeats,
  resetMovieBooking,
  selectTimeSlote,
  selectTime,
  selectDimension,
} = movieBookingSlice.actions;

export default movieBookingSlice.reducer;
