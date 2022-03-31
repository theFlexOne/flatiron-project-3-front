export default class Path {
  constructor(pathname) {
    this.pathname = pathname;
  }

  get sections() {
    return this.pathname.slice(1).split("/");
  }

  get root() {
    return this.sections[0];
  }

  get end() {
    const last = this.sections.length - 1;
    return this.sections[last];
  }

  toString() {
    return this.pathname;
  }
}
