export default class Music {
  constructor(context) {
    this._keys = Object.keys(context);
    createMusicProperties(context, this);
  }
  get selectedTab() {
    return this._currentPath;
  }
  get navTabs() {
    return this._models;
  }
  // set _rawData(context) {
  // }
}

const createMusicProperties = (context, instance) => {
  Object.entries(context).forEach(([key, value]) => {
    instance["_" + key] = value;
  });
};
