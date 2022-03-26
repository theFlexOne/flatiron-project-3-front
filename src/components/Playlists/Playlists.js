import React, { useState } from "react";
import "./playlists.css";
import Model from "../Model/Model";
import InfoTable from "../InfoTable/InfoTable";
import constants from "../../helpers/constants";
import { useMyMusic } from "../../contexts/MyMusicContext";

const { PLAYLISTS_HEADERS } = constants.headers;

const Playlists = () => {
  const { actions } = useMyMusic("playlists");
  console.log(`actions`, actions);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);

  // const selectPlaylist = async (id) => {
  //   const playlist = await backend.getRecord("playlists", id);
  //   setSelectedPlaylist(playlist);
  // };

  return (
    <div className="playlists-container">
      {/* <Model
      // selectRecord={selectPlaylist}
      />
      {selectedPlaylist && (
        <InfoTable headers={PLAYLISTS_HEADERS} data={selectedPlaylist} />
      )} */}
    </div>
  );
};

export default Playlists;
