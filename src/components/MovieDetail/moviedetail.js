import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  fetchAsyncMovieOrSeries,
  getSelectedMovieOrSeries,
} from "../../features/movies/movieSlice";
import { useDispatch, useSelector } from "react-redux";

const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();

  const idData = useSelector(getSelectedMovieOrSeries); //getting  IDdata from store
  console.log(idData);
  useEffect(() => {
    dispatch(fetchAsyncMovieOrSeries(imdbID)); //sending specific id to slice
  }, [dispatch, imdbID]);

  return (
    <div className="movie section">
      <div className="section-left">
        <div className="movie-title">{idData.Title} </div>
        <div className="movie-rating">
          <span>
            IMBD Rating <i className="fa fa-star"></i> : {idData.imdbRating}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
