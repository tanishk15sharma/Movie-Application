import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerlink">
        <a href="https://github.com/tanishk15sharma">
          <i class="fab fa-github-square github-icon"></i>
        </a>
        <a href="https://twitter.com/_tanishksharma">
          <i class="fab fa-twitter-square twitter-icon"></i>
        </a>
        <a href="https://www.linkedin.com/in/tanishk-sharma-98225a217/">
          <i class="fab fa-linkedin link-icon"></i>
        </a>
      </div>
      <div>©2022, Movie , Inc. or its affiliates</div>
    </div>
  );
};

export default Footer;
