import React from "react";
// import URLHelper from "../../helpers/URLHelper";
import { Link } from "react-router-dom";
import "./header.css";

const HeaderLink = ({ children, ...other }) => {
  return (
    <Link className="nav-link link" {...other}>
      {children}
    </Link>
  );
};

const Header = () => {
  return (
    <header className="header">
      {/* <Link to="/" className="logo-link"> */}
      <span className="logo">LOGO</span>
      {/* <img src="" alt="logo" height="30px" /> */}
      {/* </Link> */}
      <nav className="nav-links">
        <HeaderLink to="/music">Music</HeaderLink>
        <HeaderLink to="/spotify">Search Spotify</HeaderLink>
        {/* <a className="link" href="https://www.github.com">
          GitHub
        </a> */}
      </nav>
    </header>
  );
};

export default Header;
