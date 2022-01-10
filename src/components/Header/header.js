import React from "react";
import user from "../../images/user.png";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">MOVIE APP</div>
      </Link>

      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
