import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const moviesSlice = createSlice({
    name:"movies",
    initialState :{
        nowPlayingMovies : null,
        trailerVideo: null,
    },
    reducers:{
        addNowPlayingMovies : (state, action) =>{
            state.nowPlayingMovies = action.payload;
        },
        addTopRatedMovies :(state, action) =>{
            state.topRatedMovies = action.payload;
        },
        addTrendingMovies :(state, action) =>{
            state.trendingMovies = action.payload;
        },
        addTrailerVideo : (state, action) =>{
            state.trailerVideo = action.payload;
        }
    },
});

export const { 
    addNowPlayingMovies,
    addTopRatedMovies,
    addTrendingMovies,
    addTrailerVideo,
    } = moviesSlice.actions;

export default moviesSlice.reducer;