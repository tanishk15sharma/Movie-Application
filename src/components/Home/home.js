import React, { useEffect } from "react";
import MovieListing from "../MovieListing/movielisting";
import movieApi from "../../apis/movieApi";
import { APIkey } from "../../apis/movieApiKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice";

const Home = () => {
  // let apis = `http://www.omdbapi.com/?apikey=7baec597&s=Harry&type=movie`;
  const dispatch = useDispatch(); //this will dispatch(take)  the values to the reducer and update the state
  const text = "harry";

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apikey=${APIkey}&s=${text}&type=movie`)
        .catch((err) => {
          console.log(`error:${err} `);
        });
      // console.log(response);
      dispatch(addMovies(response.data));
    };
    fetchMovies();
  }, []);

  return (
    <div className="home">
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
