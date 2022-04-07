import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Music from "../helpers/classes/Music";
import URLPath from "../helpers/classes/URLPath";
import { DEFAULT_MODEL } from "../helpers/constants";
import Backend from "../services/backend/backend";

const MusicContext = createContext();

const activePathRegex = new RegExp(/\/music\/?(.+)/);

const initialState = {
  playlists: [],
  albums: [],
  artists: [],
};

const reducer = (state, action) => {
  console.log(`state`, state);
  console.log(`action`, action);
  switch (action.type) {
    case "set": {
      const { data, model } = action;
      state[model] = data;
      console.log(`state`, state);
      return state;
    }
    default:
      return state;
  }
};

const MusicProvider = ({ children }) => {
  const backend = useMemo(() => Backend.getInstance(), []);
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(`state`, state);

  const { pathname } = useLocation();
  const path = new URLPath(pathname);
  const model = path.sections[1];

  const actions = {
    set(model, data) {
      dispatch({ type: "set", model, data });
    },
    async addTrackToPlaylist(tId, pId) {},
  };

  useEffect(() => {
    if (model) {
      if (state[model] == true) return;
      backend
        .fetchModel(model)
        .then((data) => actions.set(model, data))
        .catch(console.error);
    }
  }, [model]);

  useEffect(() => {
    if (!model) navigate(`/${path.root}/${DEFAULT_MODEL}`);
  }, []);

  return (
    backend &&
    model && (
      <MusicContext.Provider
        value={{ music: state, activeModel: model, actions }}
      >
        {<Outlet />}
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
