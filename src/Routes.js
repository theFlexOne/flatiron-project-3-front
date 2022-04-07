import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Music from "./components/Music/Music";
import Playlists from "./components/Playlists/Playlists";
import Spotify from "./components/Spotify/Spotify";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/music" />} />
      <Route path="music" element={<Music />}>
        <Route path="playlists/*" element={<Playlists />} />
        {/* <Route path="albums" element={<Albums />} /> */}
      </Route>
      <Route path="spotify" element={<Spotify />} />
    </Routes>
  );
};

export default AppRoutes;
