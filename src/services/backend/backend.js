import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_BASE_URL, MODELS } from "../../helpers/constants";

class Backend {
  constructor() {
    if (Backend.instance instanceof Backend) {
      return Backend.instance;
    }
    this.config = {
      baseURL: BACKEND_BASE_URL,
      paths: MODELS,
    };

    Object.freeze(this.baseURL);
    Object.freeze(this);
    Backend.instance = this;
  }

  static getInstance() {
    return new Backend();
  }

  async fetchPlaylists() {
    return await this.fetch("playlists");
  }
  async fetchAlbums() {
    return await this.fetch("albums");
  }
  async fetchArtists() {
    return await this.fetch("artists");
  }

  async fetchModel(model, config = {}) {
    let data;
    try {
      const url = new URL(model, BACKEND_BASE_URL).href;
      const res = await axios.get(url, config);
      data = await res.data;
    } catch (err) {
      console.error(err);
    }
    return data;
  }

  async addTrackToPlaylist(tId, pId) {
    // TODO: handle this next
  }
}

export default Backend;
