import React from "react";
import { useOutletContext } from "react-router-dom";

const Albums = () => {
  const albums = useOutletContext();

  return <div>Albums</div>;
};

export default Albums;
