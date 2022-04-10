import { useEffect, useState } from "react";
import { useOutletContext, useLocation, useNavigate } from "react-router-dom";
import "./playlists.css";

const Playlists = () => {
  const { playlists } = useOutletContext();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [currentId] = pathname.match(/(?<=^\/music\/playlists\/)\d+/) || [null];

  const onPlaylistClick = (e) => {
    const { id } = e.currentTarget;
    navigate(pathname + "/" + id);
  };

  useEffect(() => {
    currentId && navigate(pathname + "/" + currentId);
  });

  console.log(`playlists`, playlists);

  return (
    <div className="playlists music">
      <h2>Playlists</h2>
      <div className="playlist-thumbnails thumbnails">
        {playlists.map((pl) => (
          <div
            key={pl.id}
            className="thumbnail"
            id={pl.id}
            onClick={onPlaylistClick}
          >
            <img src={pl.img_url} alt={`playlist-image`} />
            <p>{pl.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlists;
