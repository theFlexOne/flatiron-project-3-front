const AVAILABLE_MODELS = ["playlists", "albums", "artists"];

const BACKEND_BASE_URL = "http://localhost:9292";

const HEADERS = {
  PLAYLISTS_HEADERS: ["Name", "Album", "Artist", "Duration"],
  ALBUMS_HEADERS: [],
  ARTISTS_HEADERS: [],
};

export { AVAILABLE_MODELS, BACKEND_BASE_URL, HEADERS };
