import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import constants from "../helpers/constants";
import { setupBackend } from "./../api/backend";

const { DEFAULT_MODEL_NAME } = constants;

const MyMusicContext = createContext();

const MyMusicProvider = ({ children, ...props }) => {
  const [activeModel, setActiveModel] = useState(null);
  activeModel && console.log(`activeModel`, activeModel);

  const backend = useMemo(() => {
    return setupBackend();
  }, []);

  // the line below will throw a custom "BackendInitializationError", since only one instance of the backend class can exist at a time
  // const failingBackend = useBackend();

  const chooseModel = useCallback(
    (model) => {
      backend.get(model).then((data) => {
        setActiveModel(data);
      });
    },
    [backend]
  );

  useEffect(() => {
    chooseModel("playlists");
  }, [chooseModel]);

  const actions = {};

  return (
    <MyMusicContext.Provider
      value={{ actions, chooseModel, activeModel }}
      {...props}
    >
      {children}
    </MyMusicContext.Provider>
  );
};

const useMyMusic = (model) => {
  const context = useContext(MyMusicContext);
  context.chooseModel(model);
  console.log(`context.activeModel`, context.activeModel);
  if (!context) {
    return new Error(
      "This component must be inside the MyMusicProvider component."
    );
  }
  return context;
};

export { MyMusicProvider, useMyMusic };
