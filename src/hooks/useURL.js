import { useMemo } from "react";
import { useLocation, useParams } from "react-router";
import URLPath from "../helpers/classes/URLPath";

const useURL = (baseURL) => {
  const { pathname } = useLocation();

  class Location {
    constructor(location) {
      this.location = location;
    }
  }

  const memoizedURL = useMemo(() => {
    const url = new URL(pathname, baseURL);
    url.path = new URLPath(url.pathname);
    url.endpath = url.path.end;
    url.rootpath = url.path.root;
    return url;
  }, [pathname, baseURL]);

  return memoizedURL;
};

export default useURL;
