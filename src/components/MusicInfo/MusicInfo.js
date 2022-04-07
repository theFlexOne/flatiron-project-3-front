import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useMusic } from "../../context/MusicContext";
import "./musicInfo.css";

const MusicInfo = () => {
  const [input, setInput] = useState("");
  const params = useParams();
  const { music } = useMusic();
  const data = music[params.model].find((p) => p.id == params["*"]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // onAddTrack({ modelId: data.id, trackId: input });
  };

  return (
    data && (
      <div className="music-info">
        <div className="details-container">
          <img src={data?.img_url} alt="" />
          <div className="details-right">
            <div className="info-container">
              <h3>{data.name}</h3>
              <h5>Duration: {data.duration}</h5>
              <h5>Tracks: {data.tracks.length}</h5>
            </div>
            <form className="add-record-form" onSubmit={handleSubmit}>
              <label htmlFor="addRecord">Add Track</label>
              <input
                type="text"
                id="addRecord"
                placeholder="Enter Track ID"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button type="submit">Add</button>
            </form>
          </div>
        </div>
        <div className="tracks-container">
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
              {data.tracks.map((track) => {
                return (
                  <tr key={track.id}>
                    <td>{track.id}</td>
                    <td>{track.name}</td>
                    <td>{track.album?.name}</td>
                    <td>{track.artist?.name}</td>
                    <td>{track.duration}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    )
  );
};

export default MusicInfo;
