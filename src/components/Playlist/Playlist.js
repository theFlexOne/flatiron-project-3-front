import "./playlist.css";

import React, { useState } from "react";
import { useLocation, useOutletContext } from "react-router-dom";

const Playlist = () => {
  const [isAdding, setIsAdding] = useState(true);
  const [trackID, setTrackID] = useState("");

  const { playlists, actions } = useOutletContext();
  const { pathname } = useLocation();

  const [id] = pathname.match(/(?<=^\/music\/playlists\/)\d+/) || [null];

  const playlist = playlists.find((p) => p.id === +id);

  const handleSubmit = (e) => {
    e.preventDefault();

    const tID = trackID;
    const pID = playlist.id;
    if (isAdding) return actions.addTrackToPlaylist(tID, pID);
    return actions.removeTrackFromPlaylist(tID, pID);
  };

  return (
    <div className="playlist">
      <div className="playlist-edit">
        <form className="add-remove-form" onSubmit={handleSubmit}>
          <label htmlFor="id-input">
            {`${isAdding ? "Add" : "Remove"} track`}:
          </label>
          <input
            type="number"
            name="id-input"
            id="id-input"
            placeholder="Track ID"
            value={trackID}
            onChange={(e) => setTrackID(e.target.value)}
          />
          <span className="radio-buttons-wrapper">
            <label htmlFor="add">Add:</label>
            <input
              type="radio"
              name="add-remove"
              id="add"
              checked={isAdding === true}
              onChange={() => setIsAdding(true)}
            />
            <label htmlFor="remove">Remove:</label>
            <input
              type="radio"
              name="add-remove"
              id="remove"
              checked={isAdding === false}
              onChange={() => setIsAdding(false)}
            />
          </span>
          <input type="submit" className="btn" />
        </form>
      </div>
      <div className="playlist-info">
        <div className="playlist-details">
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
        <div className="playlist-tracks">
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
                console.log(`pl`, pl);
                return (
                  <tr key={pl.id}>
                    <td>{pl.id}</td>
                    <td>{pl.name}</td>
                    <td>{pl?.album?.name || "unknown"}</td>
                    <td>{pl?.album?.artist?.name || "unknown"}</td>
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
