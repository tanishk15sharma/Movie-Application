import React from "react";
import { getAllMovies } from "../../features/movies/movieSlice";
import { useSelector } from "react-redux";
import MovieCard from "../MovieCard/moviecard";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  console.log(movies); //movies data is coming from the store

  let renderMovies = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie} />;
      })
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>MOVIES</h2>
        <div className="movie-container"> {renderMovies} </div>
      </div>
    </div>
  );
};

export default MovieListing;
