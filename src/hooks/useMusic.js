import axios from "axios";
import { useEffect, useMemo, useRef, useState } from "react";
import { BACKEND_BASE_URL } from "../helpers/constants";

const useMusic = (path) => {
  //* connect to backend

  const [musicData, setMusicData] = useState({
    playlists: [],
    albums: [],
    artists: [],
  });
  const backendAPI = useMemo(
    () => axios.create({ baseURL: BACKEND_BASE_URL }),
    []
  );

  const get = async (model, id = "") => {
    if (musicData[model][0] & !id) return musicData[model];
    const path = id ? model + "/" + id : model;
    try {
      const res = await backendAPI.get(path);
      if (res.statusText !== "OK") throw new Error(res);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  };

  const post = async (model, body) => {
    const { modelId, trackId } = body;
    const endpoint = `${model}/${modelId}/tracks/${trackId}`;
    console.log(`endpoint`, endpoint);
    try {
      const res = await backendAPI.post(endpoint);
      console.log(`res`, res);
      // if (!res.data) throw new Error(res);
      musicData[model].push(res.data);
      setMusicData(musicData);
    } catch (err) {
      console.error(err);
    }
  };

  // const getPlaylists = async () => {
  //   if (musicData.playlists[0]) return musicData.playlists;
  //   return get("playlists");
  // };

  return {
    models: Object.keys(musicData),
    get,
    post,
  };
};

export default useMusic;
