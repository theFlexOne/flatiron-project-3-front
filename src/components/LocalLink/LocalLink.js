import "./localLink.css";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const LocalLink = ({ label, path, ...other }) => {
  const { pathname } = useLocation();

  const selected = pathname.includes(path) ? "selected" : "";
  return (
    <Link
      to={path}
      selected={selected}
      className={`local-nav-link ${selected}`}
      {...other}
    >
      {label}
    </Link>
  );
};

export default LocalLink;
