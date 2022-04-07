import React, { useEffect } from "react";
import "./music.css";
import MusicNav from "../MusicNav/MusicNav";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
// import useMusic from "../../hooks/useMusic";
import { MODELS } from "../../helpers/constants";
import { useMusic } from "../../context/MusicContext";
// import { useMusic } from "../../context/MusicContext";

const Music = () => {
  const models = MODELS;

  // useEffect(() => {
  //   if (pathname.match(/^\/music\/?$/)) navigate(models[0]);
  // }, [pathname, models]);

  return (
    <div className="music">
      <MusicNav models={models} />
      <div className="music-container">
        <Outlet context={{}} />
      </div>
    </div>
  );
};

export default Music;
