import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: {},
};

const movieSlice = createSlice({
  name: "movies", //name of the slice
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload; //Data is coming in the form of payload
      // console.log(state.movies);
    },
  },
});
// console.log(movieSlice);

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies; //first movies is the name of the slice
export default movieSlice.reducer;
