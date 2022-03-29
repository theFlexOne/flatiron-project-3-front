import React, { useEffect } from "react";
import "./music.css";
import MusicNav from "../MusicNav/MusicNav";
import { Outlet, useNavigate } from "react-router-dom";
import { useMusic } from "../../context/MusicContext";

const Music = () => {
  const music = useMusic();
  const activeModel = music._activeModel;

  return (
    <div className="music">
      <MusicNav />
      {activeModel && <Outlet context={activeModel} />}
    </div>
  );
};

export default Music;
