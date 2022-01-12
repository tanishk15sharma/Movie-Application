import React, { useState } from "react";
import user from "../../images/user.png";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  const [search, setSearch] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(search);
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
