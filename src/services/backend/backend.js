import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_BASE_URL, BACKEND_PATHS } from "../../helpers/constants";

class BackendInitializationError extends Error {
  constructor(err = null) {
    super(err);
    this.message =
      "An instance of 'Backend' already exists. THERE CAN BE ONLY ONE!.";
  }
}

const backendGet = async (model, config = {}) => {
  const url = new URL(model, BACKEND_BASE_URL).href;
  const response = await axios.get(url, config);
  const data = await response.data;
  return data;
};

class Backend {
  constructor(setState) {
    if (Backend.instance instanceof Backend) {
      return Backend.instance;
    }
    this.setState = setState;
    this.config = {
      baseURL: BACKEND_BASE_URL,
      paths: BACKEND_PATHS,
    };

    Object.freeze(this.baseURL);
    Object.freeze(this);
    Backend.instance = this;
  }

  static getInstance(setState) {
    return new Backend(setState);
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

  async fetch(model, config = {}) {
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
}

export default Backend;
