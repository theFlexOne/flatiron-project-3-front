import React from "react";
import "./musicNav.css";
import { Link } from "react-router-dom";
import { useMusic } from "../../context/MusicContext";

const MusicNav = (props) => {
  const music = useMusic();
  const { selectedTab, navTabs } = music;

  const MusicTab = ({ path, label }) => {
    const selected = path === selectedTab ? "selected" : "";
    return (
      <div className={`tab music-tab ${path} ${selected}`}>
        <Link className="link music-link" to={path}>
          {label}
        </Link>
      </div>
    );
  };

  return (
    <div className="music-nav music-tabs nav tabs">
      {navTabs.map(({ path, label }) => (
        <MusicTab key={path} path={path} label={label} />
      ))}
    </div>
  );
};

export default MusicNav;
