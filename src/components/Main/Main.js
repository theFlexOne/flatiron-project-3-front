import React from "react";
import "./main.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Music from "../Music/Music";
import { MusicProvider } from "../../context/MusicContext";
import Playlists from "../Playlists/Playlists";

const Main = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Navigate to="/music" />} />
        <Route
          path="/music/*"
          element={
            <MusicProvider>
              <Music />
            </MusicProvider>
          }
        >
          <Route path="playlists" element={<Playlists />} />
          {/* nest a :id route inside playlists? */}
        </Route>
      </Routes>
    </div>
  );
};

export default Main;
