export default class Header {
  constructor({ $target, buttonClick }) {
    this.header = document.createElement("header");
    this.header.className = "header";
    this.buttonClick = buttonClick;
    this.data = [];

    $target.appendChild(this.header);

    this.render();
  }

  render() {
    const Title = document.createElement("h1");
    Title.className = "header__title";
    Title.innerText = "UI with Cat";

    const catButton = document.createElement("button");
    catButton.className = "cat-button";
    catButton.innerText = "고양이";
    catButton.addEventListener("click", this.buttonClick);

    this.header.appendChild(Title);
    this.header.appendChild(catButton);
  }
}
