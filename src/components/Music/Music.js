import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { BACKEND_BASE_URL } from "../../helpers/constants";
import "./music.css";

const Music = () => {
  const [playlists, setPlaylists] = useState([]);
  const [albums, setAlbums] = useState([]);

  const { pathname } = useLocation();
  const activeModel = pathname.match(/(?<=^\/music\/)[^\/]+/)?.[0];

  console.log(`activeModel`, activeModel);

  const navigate = useNavigate();

  useEffect(() => {
    if (pathname.match(/^\/music\/?$/)) navigate("playlists");
  }, [pathname]);

  useEffect(() => {
    const fetchData = async () => {
      axios.get(BACKEND_BASE_URL + "/" + pathname);
    };
    // if (albums.length > 0)
    fetchData();
  }, [activeModel]);

  return (
    <div className="music">
      <Outlet context={{}} />
    </div>
  );
};

export default Music;
