import React, { useEffect, useMemo, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Playlist from "../../helpers/classes/Playlist";
import { HEADERS } from "../../helpers/constants";
import MusicInfo from "../MusicInfo/MusicInfo";
import MusicList from "../MusicList/MusicList";
import "./playlists.css";

const createPlaylistsData = (data) => {
  const playlists = data.map((playlist) => {
    const imgURL = playlist?.img_url || "";
    const name = playlist?.name || "unknown";
    const id = playlist.id;
    const tracks = playlist.tracks;
    return { imgURL, tracks, id, name };
  });
  return playlists;
};

const usePlaylistsContext = () => {
  const data = useOutletContext();
  const memoizedPlaylists = useMemo(() => {
    const playlists = createPlaylistsData(data);
    return playlists;
  }, [data]);
  return memoizedPlaylists;
};

const Playlists = (props) => {
  const [recordData, setRecordData] = useState({});
  const [playlists, setPlaylists] = useState([]);

  const outletData = usePlaylistsContext();

  useEffect(() => {
    const playlists = outletData.map((p) => {
      const playlist = new Playlist(p);
      return playlist;
    });
    setPlaylists(playlists);
  }, [outletData]);

  return (
    <div className="playlists">
      {playlists && (
        <>
          <MusicList listLabel={"Playlists"} listData={playlists} />
          <MusicInfo recordData={recordData} />
        </>
      )}
    </div>
  );
};

export default Playlists;
