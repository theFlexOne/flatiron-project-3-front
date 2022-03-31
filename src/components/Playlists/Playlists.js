import React, { useEffect, useMemo, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useMusic } from "../../context/MusicContext";
import Playlist from "../../helpers/classes/Playlist";
import { HEADERS } from "../../helpers/constants";
import MusicInfo from "../MusicInfo/MusicInfo";
import MusicInput from "../MusicInput/MusicInput";
import MusicList from "../MusicList/MusicList";
import "./playlists.css";

const createPlaylists = (data) => {
  const playlists = data.map((playlist) => {
    const imgURL = playlist?.img_url || "";
    const name = playlist?.name || "unknown";
    const id = playlist.id;
    const tracks = playlist.tracks;
    return { imgURL, tracks, id, name };
  });
  return playlists;
};

const Playlists = (props) => {
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);

  const music = useOutletContext();
  // console.log(`music`, music);

  const handlePlaylistSelect = () => {};

  return (
    <div className="playlists">
      <div className="music-input-container">
        <MusicInput />
      </div>
      <div className="music-content-container">
        <MusicList data={music.playlists} label="Playlists" />
      </div>
    </div>
  );
};

export default Playlists;

/*

      <MusicList
        data={music.playlists}
        listLabel={"Playlists"}
        onItemSelect={handlePlaylistSelect}
      />
      {selectedPlaylist && <MusicInfo data={selectedPlaylist} />}

*/
