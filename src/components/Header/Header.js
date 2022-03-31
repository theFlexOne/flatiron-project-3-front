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
      <span className="logo">LOGO</span>
      {/* <img src="" alt="logo" height="30px" /> */}
      <nav className="nav-links">
        <HeaderLink to="/music">Music</HeaderLink>
        <HeaderLink to="/spotify">Search Spotify</HeaderLink>
      </nav>
    </header>
  );
};

export default Header;
