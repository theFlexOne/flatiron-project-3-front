import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Music from "./components/Music/Music";
import MusicContent from "./components/MusicContent/MusicContent";
import { MusicProvider } from "./context/MusicContext";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/music" />} />
      <Route element={<MusicProvider />}>
        <Route path="/music" element={<Music />}>
          <Route path=":model/*" element={<MusicContent />}></Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
