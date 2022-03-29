import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_BASE_URL } from "../../helpers/constants";

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
  static _exists = false;
  static _backendInstance;
  recentResponse;

  constructor(config) {
    if (Backend._exists) return new Error("Backend already exists");
    this._config = config || {};
    Backend._backendInstance = this;
    Backend._exists = true;
  }

  get backendURL() {
    return BACKEND_BASE_URL;
  }

  fetchPlaylists() {
    return backendGet("playlists");
  }
}

const initBackend = (config = {}) => {
  if (Backend._exists) return console.warn("Backend already exists");
  const backend = new Backend(config);
  return backend;
};

export { initBackend };
