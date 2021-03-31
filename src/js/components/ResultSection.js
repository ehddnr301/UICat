import { createElem } from "../util/createElement.js";

export default class ResultSection {
  constructor({ $target }) {
    this.section = createElem("section", "result-section");
    this.data = [];
    this.currentSlide = 0;
    this.isMoving = false;
    this.DURATION = 500;

    $target.appendChild(this.section);

    this.render();
  }

  transitionEnd() {
    this.isMoving = false;
  }

  move(currentSlide, duration = 0) {
    if (duration) this.isMoving = true;

    const carouselSlides = document.querySelector(".cat-container");
    carouselSlides.style.setProperty("--duration", duration);
    carouselSlides.style.setProperty("--currentSlide", currentSlide);
    this.currentSlide = currentSlide;
  }

  onClick({ target }) {
    if (!target.classList.contains("carousel-btn") || this.isMoving) return;
    const delta = target.classList.contains("btn-left") ? -1 : 1;
    this.currentSlide += 1 * delta;

    if (this.currentSlide === this.data.length) {
      this.move(0, this.DURATION / 2);
    } else if (this.currentSlide === -1) {
      this.move(14, this.DURATION / 2);
    } else {
      this.move(this.currentSlide, this.DURATION);
    }
  }

  setState(data) {
    this.data = data;

    this.render();
  }

  render() {
    if (!this.data) return;
    this.section.innerHTML = "";
    if (this.data.length > 0) {
      const container = createElem("div", "cat-container");

      this.data.forEach((cat, idx) => {
        const { url, id } = cat;
        const wrapper = createElem("div", "cat-wrapper", `cat-${idx}`);
        const image = createElem("img", "cat-img");
        const extra = createElem("div", "cat-extra");
        image.src = url;

        wrapper.appendChild(image);
        wrapper.appendChild(extra);
        container.appendChild(wrapper);
      });
      const leftButton = createElem("button", "carousel-btn btn-left");
      const rightButton = createElem("button", "carousel-btn btn-right");
      leftButton.innerText = "﹤";
      rightButton.innerText = "﹥";
      this.section.addEventListener("click", (e) => this.onClick(e));
      this.section.addEventListener("transitionend", (e) =>
        this.transitionEnd()
      );

      this.section.appendChild(container);
      this.section.appendChild(leftButton);
      this.section.appendChild(rightButton);
    }
  }
}
