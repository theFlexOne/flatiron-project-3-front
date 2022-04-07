import React, { useEffect } from "react";
import "./musicNav.css";
import { Link, useLocation } from "react-router-dom";
import { BACKEND_PATHS } from "../../helpers/constants";

const MusicTab = ({ path, activeTab }) => {
  const label = path[0].toUpperCase() + path.slice(1);
  const isActive = activeTab === path ? "selected" : "";
  return (
    <div className={`tab music-tab ${path} ${isActive}`}>
      <Link className="link music-link" to={path}>
        {label}
      </Link>
    </div>
  );
};
const MusicNav = ({ models }) => {
  const { pathname } = useLocation();
  const activeTab = pathname.match(/\/music\/?(.*)/)[1];

  return (
    activeTab && (
      <div className="music-nav music-tabs nav tabs">
        {models.map((path) => (
          <MusicTab key={path} path={path} activeTab={activeTab} />
        ))}
      </div>
    )
  );
};

export default MusicNav;
