import React from "react";
import "./tracks.css";
import Track from "../Track/Track";

const Tracks = ({ tracks }) => {
  return (
    <div className="tracks-container">
      <table className="tracks-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Album</th>
            <th>Artist</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {tracks.map((track) => {
            return <Track track={track} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Tracks;
