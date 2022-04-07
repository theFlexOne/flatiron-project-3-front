import { useState } from "react";
import { useOutletContext, useLocation } from "react-router-dom";
import "./playlists.css";

const Playlists = () => {
  const playlists = useOutletContext();
  const { pathname } = useLocation();

  const [id] = pathname.match(/(?<=^\/music\/playlists\/)\d+/) || [null];

  console.log(`id`, id);

  const [activePlaylist, setActivePlaylist] = useState(null);

  console.log(`playlists`, playlists);

  return (
    <div className="playlists music">
      <h2>Playlists</h2>
      <div className="playlist-thumbnails thumbnails">
        {playlists.map((pl) => (
          <div key={pl.id} className="thumbnail">
            <span className="img-wrapper">
              <img src={pl.img_url} alt={`playlist-image`} />
            </span>
            <p>{pl.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlists;
