import React from "react";

const Track = ({ track }) => {
  console.log(track);
  const cells = Object.values(track);
  console.log(`cells`, cells);
  return (
    <tr>
      <td>{track.name}</td>
      <td>{track.album.name}</td>
      <td>{track.artist.name}</td>
      <td>{track.duration}</td>
    </tr>
  );
};

export default Track;
