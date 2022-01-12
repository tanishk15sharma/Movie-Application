import React, { useState } from "react";
import user from "../../images/user.png";
import { Link } from "react-router-dom";
import "./header.scss";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncSeries,
} from "../../features/movies/movieSlice";

const Header = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();

    if (search === "") return alert("Please enter search term");
    dispatch(fetchAsyncMovies(search)); //dispatching search term by user to slice
    dispatch(fetchAsyncSeries(search));
    setSearch("");
  };
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">MOVIE APP</div>
      </Link>
      <div className="search-div">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Movie or Show"
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>

      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
