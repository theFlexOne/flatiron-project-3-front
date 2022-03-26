import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Music from "../components/Music/Music";

const AppRouter = () => {
  // no major business logic here
  //just a simple/clean routes component

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/music" />} />
      <Route path="/music/*" element={<Music />} />
      {/* <Route path="/spotify" element={<Spotify />} /> */}
    </Routes>
  );
};

export default AppRouter;
