import React, { useEffect } from "react";
import MovieListing from "../MovieListing/movielisting";
import movieApi from "../../apis/movieApi";
import { APIkey } from "../../apis/movieApiKey";

const Home = () => {
  // let apis = `http://www.omdbapi.com/?apikey=7baec597&s=Harry&type=movie`;

  useEffect(() => {
    const text = "harry";
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apikey=${APIkey}&s=${text}&type=movie`)
        .catch((err) => {
          console.log(`error:${err} `);
        });
      console.log(response);
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
