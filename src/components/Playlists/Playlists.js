import { useOutletContext, useNavigate } from "react-router-dom";
import "./playlists.css";
import unavailableImg from "../../assets/No_Image_Available.jpg";
import usePathname from "../../hooks/usePathname";

const Playlists = () => {
  const { playlists } = useOutletContext();
  const navigate = useNavigate();

  const { pathname } = usePathname();

  const onPlaylistClick = (e) => {
    const { id } = e.currentTarget;
    navigate(`${pathname}/${id}`);
  };

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
            <img
              src={pl.img_url === "f" ? unavailableImg : pl.img_url}
              alt={`playlist-image`}
            />
            <p>{pl.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlists;
