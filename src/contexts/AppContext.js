import { useContext, createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [baseURL, setBaseURL] = useState("");

  class Backend {
    constructor(url) {
      this.baseURL = url;
    }
    test() {
      return console.log("testing");
    }
  }

  // const init = (baseURL) => {
  //   return new Backend(baseURL);
  // };

  return <AppContext.Provider value={Backend}>{children}</AppContext.Provider>;
};

const useApp = (url) => {};

const useBackend = (url) => {
  const Backend = useContext(AppContext);
  if (!Backend)
    return new Error(
      "No context provided. Make sure your inside the context provider."
    );
  const backend = new Backend(url);
  return backend;
};

export { AppProvider, useApp, useBackend };
