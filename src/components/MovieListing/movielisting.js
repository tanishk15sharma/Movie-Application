import React from "react";
import { getAllMovies } from "../../features/movies/movieSlice";
import { useSelector } from "react-redux";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  console.log(movies);

  return <div>movie listinggg</div>;
};

export default MovieListing;
