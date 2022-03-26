import React from "react";
import "./musicNav.css";
import { Link, useLocation } from "react-router-dom";

const PATH_REGEXP = new RegExp(/\/music\/?(.*)/);

const MusicNav = ({ models }) => {
  const { pathname } = useLocation();
  const currentPath = pathname.match(PATH_REGEXP)?.[1];

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
        return (
          <Tab key={path} path={path}>
            {label}
          </Tab>
        );
      })}
    </div>
  );
};

export default MusicNav;
