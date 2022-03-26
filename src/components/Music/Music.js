import React from "react";
import "./music.css";
import MusicNav from "../MusicNav/MusicNav";
import { AVAILABLE_MODELS } from "../../helpers/constants";

const models = AVAILABLE_MODELS.map((model) => {
  const path = model.toLowerCase();
  const label = path[0].toUpperCase() + path.slice(1);
  return { path, label };
});

const Music = () => {
  return (
    <div className="music">
      <MusicNav models={models}></MusicNav>
    </div>
  );
};

export default Music;
