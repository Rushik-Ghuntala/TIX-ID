import { createAsyncThunk } from "@reduxjs/toolkit";
import { comingSoonMovies } from "../../data-API/coming-soon-movies";




export const showComingSoonMovie = createAsyncThunk(
    'showComingSoonMovie',
    async (_, {rejectWithValue}) => {

        try{
            const cominSoonMovieResult = comingSoonMovies;
            return cominSoonMovieResult;
        }   
        catch(error){
            return rejectWithValue(error)
        }

    }
)


