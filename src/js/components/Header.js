export default class Header {
  constructor({ $target }) {
    this.header = document.createElement("header");
    this.header.className = "header";

    $target.appendChild(this.header);

    this.render();
  }

  render() {
    const Title = document.createElement("h1");
    Title.className = "header__title";
    Title.innerText = "UI with Cat";

    this.header.appendChild(Title);
  }
}
