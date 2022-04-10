import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Library from "./components/Library/Library";
import Music from "./components/Music/Music";
import Playlist from "./components/Playlist/Playlist";
import Playlists from "./components/Playlists/Playlists";
import Spotify from "./components/Spotify/Spotify";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/music" />} />
      <Route path="music" element={<Music />}>
        <Route path="playlists" element={<Playlists />} />
        <Route path="playlists/:id" element={<Playlist />} />
        {/* <Route path="albums" element={<Albums />} />
        <Route path="albums/:id" element={<Album />} /> */}
      </Route>
      <Route path="library" element={<Library />} />
    </Routes>
  );
};

export default AppRoutes;
