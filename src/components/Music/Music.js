import React, { useEffect } from "react";
import "./music.css";
import MusicNav from "../MusicNav/MusicNav";
import {
  Navigate,
  Outlet,
  useLocation,
  useNavigate,
  useOutletContext,
} from "react-router-dom";
import { useMusic } from "../../context/MusicContext";

const Music = () => {
  const navigate = useNavigate();
  const music = useOutletContext();

  useEffect(() => {
    navigate("playlists");
  }, []);
  useEffect(() => {
    console.log(`music`, music);
  }, [music]);

  return (
    <div className="music">
      {music && (
        <>
          <MusicNav />
          <Outlet context={music} />
        </>
      )}
    </div>
  );
};

export default Music;
