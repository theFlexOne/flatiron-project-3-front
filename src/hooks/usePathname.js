import { useLocation } from "react-router-dom";

const PATHNAME_SEGMENTS_REGEXP = /(?<=\/)[^\/?]+/g;

const usePathname = () => {
  const { pathname } = useLocation();
  const matches = [...pathname.matchAll(PATHNAME_SEGMENTS_REGEXP)];
  const pathSegments = matches.map((match) => match[0]);

  const rootPath = pathSegments[0];
  const currentPath = pathSegments.slice(-1)[0];
  const parentPath = pathSegments.slice(-2)[0] || "";
  const parentPathname = `/${pathSegments.slice(0, -1).join("/")}`;

  const pathObj = {
    pathname,
    parentPathname,
    pathSegments,
    rootPath,
    parentPath,
    currentPath,
    first: rootPath,
    last: currentPath,
    toString: () => pathname,
  };

  pathSegments.forEach((segment, i) => (pathObj[i] = segment));

  return pathObj;
};

export default usePathname;
