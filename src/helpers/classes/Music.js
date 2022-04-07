export default class Music {
  constructor(data) {
    console.log(`Setting up Music instance with data:`, data);
    this._data = data;

    Object.freeze(this._data);
  }

  get playlists() {
    return this._data?.playlists || [];
  }
}

const createProps = (data, instance) => {
  Object.entries(data).forEach(([key, value]) => {
    instance[key] = value;
  });
};
