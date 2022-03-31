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
  static _playlists = new PlaylistCollection();
  constructor(data) {
    // if (!isValidData) return new Error("Invalid playlist data");
    this._data = data;
    Playlist._playlists.add(this);
  }

  static get all() {
    return this._playlists;
  }

  get name() {
    return this._data.name;
  }
  get id() {
    return this._data.id;
  }
  get imgURL() {
    return this._data.imgURL;
  }
  get tracks() {
    return this._data.tracks;
  }
}

const usePlaylists = () => {};
