import React from "react";
// import URLHelper from "../../helpers/URLHelper";
import { Link } from "react-router-dom";
import NavLink from "../NavLink/NavLink";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo-link">
        <img src="assets/Playlist-Creator_logo.png" alt="logo" height="30px" />
      </Link>
      <nav className="nav-links">
        <NavLink to="/my_music">My Music</NavLink>
        <NavLink to="/spotify">Search Spotify</NavLink>
        <a href="https://www.github.com/theflexone" className="link">
          My GitHub Page
        </a>
      </nav>
    </header>
  );
};

export default Header;
