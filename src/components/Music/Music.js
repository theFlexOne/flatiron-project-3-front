import React from "react";
import "./music.css";
import MusicNav from "../MusicNav/MusicNav";
import { AVAILABLE_MODELS } from "../../helpers/constants";
import { useLocation } from "react-router-dom";

const models = AVAILABLE_MODELS.map((model) => {
  const path = model.toLowerCase();
  const label = path[0].toUpperCase() + path.slice(1);
  return { path, label };
});

const Music = () => {
  const { pathname } = useLocation();
  const currentPath = pathname.match(/\/music\/?(.*)/)[1];

  return (
    <div className="music">
      <MusicNav currentPath={currentPath} models={models}></MusicNav>
    </div>
  );
};

export default Music;
