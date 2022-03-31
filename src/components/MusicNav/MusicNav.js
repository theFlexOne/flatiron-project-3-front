import React, { useEffect } from "react";
import "./musicNav.css";
import { Link, useLocation } from "react-router-dom";
import { BACKEND_PATHS } from "../../helpers/constants";

const MusicTab = ({ path, activeTab }) => {
  const label = path[0].toUpperCase() + path.slice(1);
  return (
    <div className={`tab music-tab ${path} ${activeTab}`}>
      <Link className="link music-link" to={path}>
        {label}
      </Link>
    </div>
  );
};
const MusicNav = () => {
  const { pathname } = useLocation();
  const activeTab = pathname.match(/\/music\/?(.*)/)[1];

  return (
    activeTab && (
      <div className="music-nav music-tabs nav tabs">
        {BACKEND_PATHS.map((path) => (
          <MusicTab key={path} path={path} activeTab={activeTab} />
        ))}
      </div>
    )
  );
};

export default MusicNav;
