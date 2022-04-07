import React, { useEffect, useMemo, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useMusic } from "../../context/MusicContext";
// import Playlist from "../../helpers/classes/Playlist";
import { HEADERS } from "../../helpers/constants";
import MusicInfo from "../MusicInfo/MusicInfo";
import MusicInput from "../MusicInput/MusicInput";
import MusicList from "../MusicList/MusicList";
import "./playlists.css";

const createPlaylists = (data) => {
  const playlists = data.map((playlist) => {
    const img_url = playlist?.img_url || "";
    const name = playlist?.name || "unknown";
    const id = playlist.id;
    const tracks = playlist.tracks;
    return { img_url, tracks, id, name };
  });
  return playlists;
};

const Playlists = (props) => {
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const musicController = useOutletContext();
  const [playlistsData, setPlaylistsData] = useState([]);

  const handlePlaylistSelect = () => {};

  const playlists = createPlaylists(playlistsData);
  console.log(`playlists`, playlists);

  useEffect(() => {
    musicController.get("playlists").then((data) => setPlaylistsData(data));
  }, [musicController]);

  return (
    playlists && (
      <>
        <div className="music-input-container">
          <MusicInput />
        </div>
        <div className="music-content-container">
          <MusicList data={playlists} label="Playlists" />
        </div>
      </>
    )
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
