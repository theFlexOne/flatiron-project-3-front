const MODELS = ["playlists", "albums", "artists"];

const DEFAULT_MODEL = "playlists";

const BACKEND_BASE_URL = "http://localhost:9292";

const HEADERS = {
  PLAYLISTS_HEADERS: ["Name", "Album", "Artist", "Duration"],
  ALBUMS_HEADERS: [],
  ARTISTS_HEADERS: [],
};

export { BACKEND_BASE_URL, HEADERS, MODELS, DEFAULT_MODEL };
