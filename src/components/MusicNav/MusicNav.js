import React, { useEffect } from "react";
import "./musicNav.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import { BACKEND_PATHS } from "../../helpers/constants";
import usePathname from "../../hooks/usePathname";

const MusicNav = () => {
  const activeTab = usePathname()[1] || "";

  const renderTab = (path) => {
    const label = path[0].toUpperCase() + path.slice(1);
    return (
      <NavLink to={path} key={path} className={`tab music-tab`}>
        <p>{label}</p>
      </NavLink>
    );
  };

  console.log(`activeTab`, activeTab);

  return (
    activeTab && (
      <div className="music-nav music-tabs nav tabs">
        {BACKEND_PATHS.map(renderTab)}
      </div>
    )
  );
};

export default MusicNav;
