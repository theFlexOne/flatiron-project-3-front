import "./playlist.css";
import React, { useState } from "react";
import {
  matchPath,
  resolvePath,
  useHref,
  useNavigate,
  useOutletContext,
} from "react-router-dom";
import MusicForm from "../MusicForm/MusicForm";
import usePathname from "../../hooks/usePathname";

const Playlist = () => {
  const { playlists, actions } = useOutletContext();
  const [trackID, setTrackID] = useState("");
  const navigate = useNavigate();

  const path = usePathname();
  const id = path[2];

  const playlist = playlists.find((p) => p.id === +id);

  const handlePlaylistTrackSubmit = (e, isAdding) => {
    e.preventDefault();

    const tID = trackID;
    const pID = playlist.id;
    if (isAdding) return actions.addTrackToPlaylist(tID, pID);
    return actions.removeTrackFromPlaylist(tID, pID);
  };

  return (
    <div className="playlist record-container">
      <MusicForm
        trackID={trackID}
        setTrackID={setTrackID}
        handleSubmit={handlePlaylistTrackSubmit}
      />
      <div className="playlist-info record-info">
        <button
          className="back-btn"
          onClick={() => navigate(path.parentPathname, { replace: true })}
        >
          {"BACK" /* <- should be an icon */}
        </button>
        <div className="playlist-details record-details">
          <img
            src={playlist.img_url}
            alt="playlist image"
            width="150"
            height="150"
          />
          <div>
            <h2>{playlist.name}</h2>
          </div>
        </div>
        <div className="playlist-tracks record-tracks">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Album</th>
                <th>Artist</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              {playlist.tracks.map((pl) => {
                return (
                  <tr key={pl.id}>
                    <td>{pl.id}</td>
                    <td>{pl.name}</td>
                    <td>{pl?.album?.name || "unknown"}</td>
                    <td>{pl?.artist?.name || "unknown"}</td>
                    <td>{pl.duration}</td>
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

export default Playlist;
