class PlaylistCollection {
  constructor(playlistList = []) {
    this.playlistList = playlistList;
  }
  get names() {
    return this.playlistList.map((p) => p.name);
  }
  add(playlist) {
    this.playlistList.push(playlist);
    return this.playlistList;
  }
}

export default class Playlist {
  constructor(data) {
    this._data = data;

    // Object.freeze(this._data);
    // Object.freeze(this);
    Playlist.instance = this;
  }

  static getInstance() {
    if (Playlist.instance instanceof Playlist) return Playlist.instance;
    return new Playlist();
  }

  static create(data) {
    console.log(`data`, data);
    if (!data[0]) return new Playlist(data);
  }

  static find(id) {
    const playlist = this._data.find((p) => id === p.id);
    return (
      playlist || new Error(`A playlist with an id of ${id} does not exist`)
    );
  }

  get all() {
    return this._data;
  }
  get name() {
    return this._data.name;
  }
  get id() {
    return this._data.id;
  }
  get imgURL() {
    return this._data.img_url;
  }
  set tracks(tracks) {
    this._data.tracks = tracks;
  }
  get tracks() {
    return this._data.tracks;
  }

  addTrack(track) {
    this.tracks.push(track);
  }

  removeTrack(trackId) {
    const i = this.tracks.findIndex((t) => t.id === trackId);
    const targetTrack = this.tracks.splice(i, 1);
    return targetTrack;
  }
}

console.log(`Playlist`, { Playlist });

// const isValidData = (data) => {
//   const invalid = true;
//   console.log(`data`, data);
//   // if ()
// };

const formatPlaylistData = (data) => {
  const imgURL = data?.img_url || "";
  const name = data?.name || "unknown";
  const id = data.id;
  const tracks = data.tracks;
  return { imgURL, name, id, tracks };
};

const createPlaylists = (data) => {
  return data.map((playlistData) => new Playlist(playlistData));
};

const formatPlaylistsData = (data) => {
  const playlists = data.map((playlist) => {
    const imgURL = playlist?.img_url || "";
    const name = playlist?.name || "unknown";
    const id = playlist.id;
    const tracks = playlist.tracks;
    return { imgURL, name, id, tracks };
  });
  return playlists;
};
