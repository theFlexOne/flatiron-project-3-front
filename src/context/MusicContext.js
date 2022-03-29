import { createContext, useContext, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Music from "../helpers/classes/Music";
import {
  AVAILABLE_MODELS as models,
  BACKEND_BASE_URL,
} from "../helpers/constants";
import useURL from "../hooks/useURL";
import { initBackend } from "../services/backend/backend";

const MusicContext = createContext();

const currentPathRegex = new RegExp(/\/music\/?(.*)/);

const MusicProvider = ({ children }) => {
  const { pathname } = useLocation();
  const currentPath = pathname.match(currentPathRegex)?.[1];
  const navigate = useNavigate();
  const [backend, setBackend] = useState(null);

  const [activeModel, setActiveModel] = useState(null);

  useEffect(() => {
    const back = initBackend();
    setBackend(back);
  }, []);

  useEffect(() => {
    if (currentPath === "") return () => navigate("/music/playlists");
    backend && backend.fetchPlaylists().then((model) => setActiveModel(model));
  }, [currentPath, backend]);

  const contextValue = { currentPath, activeModel, models, backend };

  const music = new Music(contextValue);

  return (
    backend && (
      <MusicContext.Provider value={music}>
        <Outlet />
      </MusicContext.Provider>
    )
  );
};

const useMusic = () => {
  const context = useContext(MusicContext);
  // check for errors here...
  return context;
};

export { MusicProvider, useMusic };
