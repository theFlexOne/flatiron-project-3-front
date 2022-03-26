import React from "react";
import "./playlist.css";

const Playlist = ({ data, selectPlaylist }) => {
  return (
    <li className="playlist-container" onClick={() => selectPlaylist(data.id)}>
      <img src={data.img_url} height="50px" alt="" />
      <span>{data.name}</span>
    </li>
  );
};

export default Playlist;
