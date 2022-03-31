import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { MusicProvider } from "./context/MusicContext";
import Music from "./components/Music/Music";
import Playlists from "./components/Playlists/Playlists";
import Albums from "./components/Albums/Albums";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/music" />} />
      <Route element={<MusicProvider />}>
        <Route path="/music" element={<Music />}>
          <Route path="playlists" element={<Playlists />} />
          <Route path="albums" element={<Albums />} />
        </Route>
        {/* nest an :id route inside playlists? */}
      </Route>
      <Route path="/test" element={<Navigate to="/complete" />} />
    </Routes>
  );
};

export default AppRoutes;