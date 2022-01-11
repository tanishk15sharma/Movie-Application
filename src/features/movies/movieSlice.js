import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import movieApi from "../../apis/movieApi";
import { APIkey } from "../../apis/movieApiKey";

const initialState = {
  movies: {},
  shows: {},
};

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "harry";
    const response = await movieApi.get(
      `?apikey=${APIkey}&s=${movieText}&type=movie`
    );
    // console.log(response);
    return response.data;
  }
);

export const fetchAsyncSeries = createAsyncThunk(
  "movies/fetchAsyncSeries",
  async () => {
    const seriesText = "friends";
    const response = await movieApi.get(
      `?apikey=${APIkey}&s=${seriesText}&type=series`
    );
    // console.log(response);
    return response.data;
  }
);

const movieSlice = createSlice({
  name: "movies", //name of the slice
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload; //Data is coming in the form of payload
      // console.log(state.movies);
    },
    addSeries: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Moive Data;fetch Successful");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Error:Rejected...");
    },
    [fetchAsyncSeries.fulfilled]: (state, { payload }) => {
      console.log("Movie Data;fetch Successful");
      return { ...state, shows: payload };
    },
  },
});
// console.log(movieSlice);

export const { addMovies } = movieSlice.actions; //destructuring movieSlice object.actions.
export const getAllSeries = (state) => state.movies.shows;
export const getAllMovies = (state) => state.movies.movies; //first movies is the name of the slice.
//in above line  we are making a arrow function and then passing state as a parameter in it and it will be recived by movie listing with the help of useSelector.
export default movieSlice.reducer;
