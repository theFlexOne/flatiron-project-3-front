import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Music from "../helpers/classes/Music";
import { AVAILABLE_MODELS } from "../helpers/constants";
import Backend from "../services/backend/backend";

const MusicContext = createContext();

const activePathRegex = new RegExp(/\/music\/?(.+)/);

const models = AVAILABLE_MODELS;

const initialState = {
  playlists: [],
  albums: [],
  artists: [],
};

const MusicProvider = ({ children }) => {
  const [musicData, setMusicData] = useState(null);

  const backend = useMemo(() => Backend.getInstance(setMusicData), []);

  //
  const { pathname } = useLocation();
  const activePath = pathname.match(activePathRegex)?.[1] || null;

  const music = useMemo(() => new Music(musicData), [musicData]);

  const setState = (state) => {
    return { ...musicData, ...state };
  };

  console.log(`musicData`, musicData);

  useEffect(() => {
    if (activePath && music) {
      backend
        .fetch(activePath)
        .then((data) => setMusicData({ [activePath]: data }))
        .catch(console.error);
    }
  }, [activePath]);

  return (
    backend &&
    activePath && (
      <MusicContext.Provider value={{ activePath }}>
        {<Outlet context={music} />}
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
