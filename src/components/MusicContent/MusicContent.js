import React, { useEffect, useState } from "react";
import "./musicContent.css";
import {
  useLocation,
  useMatch,
  useOutletContext,
  useParams,
} from "react-router-dom";
import MusicInput from "../MusicInput/MusicInput";
import MusicList from "../MusicList/MusicList";
import URLPath from "../../helpers/classes/URLPath";
import MusicInfo from "../MusicInfo/MusicInfo";
import { useMusic } from "../../context/MusicContext";

const MusicContent = () => {
  const musicObj = useMusic();
  console.log(`musicObj`, musicObj);
  const { pathname } = useLocation();
  const path = new URLPath(pathname);
  const model = path.sections[1];
  const id = path.sections[2];

  console.log(`model`, model);
  console.log(`id`, id);

  // const handleAddTrack = ({ modelId, trackId }) => {
  //   musicController.post(model, { modelId, trackId });
  // };

  // useEffect(() => {
  //   id && musicController.get(model, id).then((data) => setRecordData(data));
  // }, [musicController, model, id]);

  return (
    <>
      <MusicList />
      {/* <div className="music-input-container">
        <MusicInput />
      </div> */}
      {/* {!id ? (
        <div className="music-content-container">
          <MusicList />
        </div>
      ) : (
        <MusicInfo
        // onAddTrack={handleAddTrack}
        />
      )} */}
    </>
  );
};

export default MusicContent;
