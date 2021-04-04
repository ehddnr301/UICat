import { createElem } from "./createElement.js";

export default class ScrollIndicator {
  constructor({ $target }) {
    this.scrollBar = createElem("div", "scroll-bar");
    this.onScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      const contentHeight = scrollHeight - clientHeight;
      const percent = (scrollTop / contentHeight) * 100;

      this.scrollBar.style.width = percent + "%";
    };

    $target.appendChild(this.scrollBar);
  }

  addScrollIndicator() {
    window.addEventListener("scroll", this.onScroll);
  }

  removeScrollIndicator() {
    window.removeEventListener("scroll", this.onScroll);
  }
}
