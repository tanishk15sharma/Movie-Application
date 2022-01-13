import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerlink">
        <a href="https://github.com/tanishk15sharma" target="_blank">
          <i class="fab fa-github-square github-icon   link-icon  "></i>
        </a>
        <a href="https://twitter.com/_tanishksharma" target="_blank">
          <i class="fab fa-twitter-square twitter-icon  link-icon "></i>
        </a>
        <a
          href="https://www.linkedin.com/in/tanishk-sharma-98225a217/"
          target="_blank"
        >
          <i class="fab fa-linkedin link-icon  link-icon "></i>
        </a>
      </div>
      <div className="footer-text">
        IMDb BOX©2022, Movie , Inc. or its affiliates
      </div>
    </div>
  );
};

export default Footer;
