const sectionsRegex = new RegExp(/(?<=\/)\w+/, "g");

export default class URLPath {
  constructor(pathname) {
    this.pathname = pathname;
  }

  get length() {
    return this.sections.length;
  }

  get sections() {
    return [...this.pathname.matchAll(sectionsRegex)].map((s) => s[0]);
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
