import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { BACKEND_BASE_URL } from "../../helpers/constants";
import "./music.css";

const Music = () => {
  const [music, setMusic] = useState({
    playlists: [],
    albums: [],
  });

  console.log(`music`, music);

  const { pathname } = useLocation();
  const activeModel = pathname.match(/(?<=^\/music\/)[^\/]+/)?.[0];

  const navigate = useNavigate();

  const buildURL = (pID, tID) => {
    const pathname = `/playlists/${pID}/tracks/${tID}`;
    return BACKEND_BASE_URL + pathname;
  };

  const actions = {
    async addTrackToPlaylist(tID, pID) {
      const url = buildURL(pID, tID);
      const res = await axios.post(url);
      const track = res.data;
      const newCollection = { ...music };
      newCollection.playlists.find((p) => p.id === pID).tracks.push(track);
      setMusic(newCollection);
    },
    async removeTrackFromPlaylist(tID, pID) {
      const url = buildURL(pID, tID);
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
    if (pathname.match(/^\/music\/?$/)) navigate("playlists");
  }, [pathname]);

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

  return music[activeModel]?.[0] ? (
    <Outlet context={{ [activeModel]: music[activeModel], actions }} />
  ) : (
    <h2>LOADING...</h2>
  );
};

export default Music;
