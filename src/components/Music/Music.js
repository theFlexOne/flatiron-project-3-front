import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { BACKEND_BASE_URL } from "../../helpers/constants";
import usePathname from "../../hooks/usePathname";
import "./music.css";
import MusicNav from "../MusicNav/MusicNav";

const Music = () => {
  const [music, setMusic] = useState({
    playlists: [],
    albums: [],
  });

  console.log(`music`, music);

  const path = usePathname();
  const activeModel = path[1] || "";

  const navigate = useNavigate();

  const buildURL = (pID, tID) => {
    const pathname = `/playlists/${pID}/tracks/${tID}`;
    return BACKEND_BASE_URL + pathname;
  };

  const actions = {
    async addTrackToPlaylist(tID, pID) {
      const url = new URL("playlist_tracks", BACKEND_BASE_URL);
      url.searchParams.set("playlist_id", pID);
      url.searchParams.set("track_id", tID);
      const res = await axios.post(url);
      console.log(`res`, res);
      const track = res.data;
      const newCollection = { ...music };
      newCollection.playlists.find((p) => p.id === pID).tracks.push(track);
      setMusic(newCollection);
    },
    async removeTrackFromPlaylist(tID, pID) {
      const url = new URL("playlist_tracks", BACKEND_BASE_URL);
      url.searchParams.set("playlist_id", pID);
      url.searchParams.set("track_id", tID);
      const res = await axios.delete(url);
      const newCollection = { ...music };
      const tracks = newCollection.playlists.find((p) => p.id == pID).tracks;
      const tInd = tracks.findIndex((t) => t.id == tID);
      tracks.splice(tInd, 1);
      setMusic(newCollection);
    },
    async findTrack(text, filter) {
      const url = new URL("/tracks/search", BACKEND_BASE_URL);
      url.searchParams.set(filter, text);
      const res = await axios.get(url);
    },
  };

  useEffect(() => {
    if (!activeModel) navigate("playlists");
  }, [activeModel]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(BACKEND_BASE_URL + "/" + activeModel);
        setMusic({ ...music, [activeModel]: res.data });
      } catch (err) {
        console.error(err);
      }
    };
    !music[activeModel]?.[0] && activeModel && fetchData();
  }, [activeModel]);

  return (
    <>
      <MusicNav />
      {music[activeModel]?.[0] ? (
        <Outlet context={{ [activeModel]: music[activeModel], actions }} />
      ) : (
        <h2>LOADING...</h2>
      )}
    </>
  );
};

export default Music;
