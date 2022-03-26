const MODELS = [
  { label: "Playlists", path: "playlists" },
  { label: "Albums", path: "albums" },
  { label: "Artists", path: "artists" },
];

const BACKEND_BASE_URL = "http://localhost:9292";

const DEFAULT_MODEL_NAME = "playlists";

const headers = {
  PLAYLISTS_HEADERS: ["Name", "Album", "Artist", "Duration"],
  ALBUMS_HEADERS: [],
  ARTISTS_HEADERS: [],
};

const constants = {
  headers,
  MODELS,
  DEFAULT_MODEL_NAME,
  BACKEND_BASE_URL,
};

export default constants;
