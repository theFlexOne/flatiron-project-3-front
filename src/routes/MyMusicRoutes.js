import React from "react";
import { Route, Routes } from "react-router-dom";
import Albums from "../components/Albums/Albums";
import Artists from "../components/Artists/Artists";
import Playlists from "../components/Playlists/Playlists";

const MyMusicRoutes = () => {
  return (
    <Routes>
      <Route path={"playlists"} element={<Playlists />}></Route>
      <Route path={"albums"} element={<Albums />}></Route>
      <Route path={"artists"} element={<Artists />}></Route>
    </Routes>
  );
};

export default MyMusicRoutes;
