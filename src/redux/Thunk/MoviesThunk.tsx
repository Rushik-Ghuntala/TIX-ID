import { createAsyncThunk } from "@reduxjs/toolkit";
import { movies } from "../../data-API/movies-data";




export const showMoviesData = createAsyncThunk(
    'showMoviesData',
    async (_, {rejectWithValue}) => {


        try{
            const movieResult = movies;
            console.log(movieResult)
            // await new Promise(resolve => setTimeout(resolve, 3300))
            return movieResult;
        }
        catch(error){
            return rejectWithValue(error);
        }

        
    }
)








