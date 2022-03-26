import React from "react";
import "./musicNav.css";
import { Link } from "react-router-dom";

const MusicNav = ({ currentPath, models }) => {
  const Tab = ({ path, children }) => {
    const selected = path === currentPath ? "selected" : "";
    return (
      <div className={`tab music-tab ${selected}`}>
        <Link className="link" to={path}>
          {children}
        </Link>
      </div>
    );
  };

  console.dir(models);

  return (
    <div className="music-nav music-tabs tabs">
      {models.map(({ path, label }) => {
        return <Tab path={path}>{label}</Tab>;
      })}
    </div>
  );
};

export default MusicNav;
