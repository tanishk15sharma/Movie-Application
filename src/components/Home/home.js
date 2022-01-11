import React, { useEffect } from "react";
import MovieListing from "../MovieListing/movielisting";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncSeries,
} from "../../features/movies/movieSlice";

const Home = () => {
  // let apis = `http://www.omdbapi.com/?apikey=7baec597&s=Harry&type=movie`;
  const dispatch = useDispatch(); //this will dispatch(take)  the values to the reducer and update the state
  const text = "harry";

  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncSeries());
  }, [dispatch]);

  return (
    <div className="home">
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
