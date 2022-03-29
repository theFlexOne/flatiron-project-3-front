import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import Music from "../components/Music/Music";
import Playlists from "../components/Playlists/Playlists";
import { MusicProvider } from "../context/MusicContext";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route element={<MusicProvider />}>
          <Route path="music" element={<Music />}>
            <Route path="playlists" element={<Playlists />} />
          </Route>
          {/* nest a :id route inside playlists? */}
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
