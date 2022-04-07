const sectionsRegex = new RegExp(/(?<=\/)\w+/, "g");
export default class URLx extends URL {
  constructor(url, baseURL = "") {
    super(url, baseURL);
  }
  get sections() {
    const matches = [...this.pathname.matchAll(sectionsRegex)];
    const sections = matches.map((s) => s[0]);
    return sections;
  }

  get root() {
    return this.sections[0];
  }

  get end() {
    const iEnd = this.sections.length - 1;
    return this.sections[iEnd];
  }
}
