import React, { useEffect, useState } from "react";
import "./myMusic.css";
import LocalNav from "../../components/LocalNav/LocalNav";
import { useLocation } from "react-router-dom";
import MyMusicRoutes from "../../routes/MyMusicRoutes";
import { MyMusicProvider } from "../../contexts/MyMusicContext";

//*-> "container" component
//*-> top level container for route "/my_music"

const MyMusic = () => {
  return (
    <MyMusicProvider>
      <div className="main-content my-music">
        <LocalNav />
        <MyMusicRoutes />
      </div>
    </MyMusicProvider>
  );
};

export default MyMusic;
