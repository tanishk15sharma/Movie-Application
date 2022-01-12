import React, { useEffect } from "react";
import "./moviedetail.scss";
import { useParams } from "react-router-dom";
import {
  fetchAsyncMovieOrSeries,
  getSelectedMovieOrSeries,
  removeSelectedMovieOrShow,
} from "../../features/movies/movieSlice";
import { useDispatch, useSelector } from "react-redux";

const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();

  const idData = useSelector(getSelectedMovieOrSeries); //getting  IDdata from store
  // console.log(idData);
  useEffect(() => {
    dispatch(fetchAsyncMovieOrSeries(imdbID)); //sending specific id to slice

    return () => {
      //as soon as we change the movieDetail card we have to see previous movieDetail for a sec (Issue)
      dispatch(removeSelectedMovieOrShow()); //this will clean the pass movieDetail data (solution)
    };
  }, [dispatch, imdbID]);

  return (
    <div className="movie-section">
      {Object.keys(idData).length === 0 ? (
        <div>
          <i className="fa fa-hourglass"></i>
        </div>
      ) : (
        <>
          <div className="section-left">
            <div className="movie-title">{idData.Title} </div>
            <div className="movie-rating">
              <span>
                IMDB Rating <i className="fa fa-star"></i> : {idData.imdbRating}
              </span>
              <span>
                IMDB Votes <i className="fa fa-thumbs-up"></i> :{" "}
                {idData.imdbVotes}
              </span>
              <span>
                Run Time <i className="fa fa-film"></i> : {idData.Runtime}
              </span>
              <span>
                Year <i className="fa fa-calendar"></i> : {idData.Year}
              </span>
            </div>
            <div className="movie-plot">{idData.Plot}</div>
            <div className="movie-info">
              <div>
                <span>Director </span>
                <span>{idData.Director}</span>
              </div>
              <div>
                <span>Released </span>
                <span>{idData.Released}</span>
              </div>
              <div>
                <span>Stars </span>
                <span>{idData.Actors}</span>
              </div>
              <div>
                <span>Generes </span>
                <span>{idData.Genre}</span>
              </div>
              <div>
                <span>Languages </span>
                <span>{idData.Language}</span>
              </div>
              <div>
                <span>Awards </span>
                <span>{idData.Awards}</span>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img src={idData.Poster} alt={idData.imdbID} />
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
