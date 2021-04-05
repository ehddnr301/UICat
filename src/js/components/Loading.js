import { createElem } from "../util/createElement.js";

export default class Loading {
  constructor({ $target }) {
    this.loadingContainer = createElem("div", "loading hidden");

    $target.appendChild(this.loadingContainer);

    this.render();
  }

  toggleLoading() {
    const loadingContainer = document.querySelector(".loading");
    loadingContainer.classList.toggle("hidden");
  }

  render() {
    const loadingImage = createElem("img", "loading-image");
    loadingImage.src = "images/21.gif";

    this.loadingContainer.appendChild(loadingImage);
  }
}
