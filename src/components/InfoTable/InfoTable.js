import React from "react";
import "./infoTable.css";

const InfoTable = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Album</th>
          <th>Artist</th>
          <th>Duration</th>
        </tr>
      </thead>
      <tbody>
        {/* {tracks.map((track) => {
            return <Track track={track} />;
          })} */}
      </tbody>
    </table>
  );
};

export default InfoTable;
