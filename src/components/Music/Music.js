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

  const { pathname } = useLocation();
  const activeModel = pathname.match(/(?<=^\/music\/)[^\/]+/)?.[0];

  console.log(`music`, music);
  console.log(`activeModel`, activeModel);

  const navigate = useNavigate();

  useEffect(() => {
    if (pathname.match(/^\/music\/?$/)) navigate("playlists");
  }, [pathname]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(BACKEND_BASE_URL + "/" + activeModel);
        console.log(`res`, res);
        setMusic({ ...music, [activeModel]: res.data });
      } catch (err) {
        console.error(err);
      }
    };
    !music[activeModel][0] && activeModel && fetchData();
  }, [activeModel]);

  return music[activeModel][0] ? (
    <Outlet context={music[activeModel]} />
  ) : (
    <h2>LOADING...</h2>
  );
};

export default Music;
