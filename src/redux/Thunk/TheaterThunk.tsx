import { createAsyncThunk } from "@reduxjs/toolkit";
import { theaterData } from "../../data-API/theater-data";

export const showTheaterData = createAsyncThunk(
  "showTheaterData",
  async (_, { rejectWithValue }) => {
    try {
      const theaterDataResult = theaterData;
      return theaterDataResult;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
