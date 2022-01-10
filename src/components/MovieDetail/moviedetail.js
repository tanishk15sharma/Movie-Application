import React from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  let { imdbID } = useParams();

  return <div>moviedetail {imdbID} </div>;
};

export default MovieDetail;
