import React from "react";
// import URLHelper from "../../helpers/URLHelper";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";

const HeaderLink = ({ children, ...other }) => {
  return (
    <Link className="nav-link link" {...other}>
      {children}
    </Link>
  );
};

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <Link to="/" className="logo">
        LOGO
      </Link>
      {/* <img src="" alt="logo" height="30px" /> */}
      <nav className="nav-links">
        <HeaderLink to="/music">Music</HeaderLink>
        <HeaderLink to="">Search Spotify</HeaderLink>
      </nav>
    </header>
  );
};

export default Header;
