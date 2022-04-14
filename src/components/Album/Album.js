import "./album.css";
import React from "react";
import usePathname from "../../hooks/usePathname";
import { useNavigate, useOutletContext } from "react-router-dom";

const Album = () => {
  const { albums, actions } = useOutletContext();
  const path = usePathname();
  const id = path[2];
  const album = albums.find((album) => album.id === +id);
  const navigate = useNavigate();

  return (
    <div className="album record-container">
      <div className="record-info">
        <button
          className="back-btn"
          onClick={() => navigate(path.parentPathname, { replace: true })}
        >
          {"BACK" /* <- should be an icon */}
        </button>

        <div className="record-details">
          <img src={album.img_url} alt="album image" width="150" height="150" />
          <div>
            <h2 className="album-name">{album.name}</h2>
            <h4 className="album-artist-name">{album.artist.name}</h4>
          </div>
        </div>
        <div className="record-tracks">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              {album.tracks.map((track) => {
                return (
                  <tr key={track.id}>
                    <td>{track.id}</td>
                    <td>{track.name}</td>
                    <td>{track.duration || "unknown"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Album;
