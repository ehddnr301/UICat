import { createElem } from "../util/createElement.js";

export default class ProgressBar {
  constructor({ $target, limit }) {
    this.section = createElem("section", "progress-section");
    this.current = 0;
    this.limit = limit;
    this.range = 100 / this.limit;
    this.intervalSpeed = 30;

    $target.appendChild(this.section);

    this.render();
  }

  setProgress(progress) {
    this.current = progress;

    this.render();
  }

  increaseProgress(targetElem) {
    if (this.current === this.limit) return;

    let start = this.current * this.range;
    this.current++;
    const end = this.current * this.range;

    const frame = () => {
      if (start >= end) {
        clearInterval(intervalId);
      } else {
        start++;
        targetElem.style.width = start + "%";
      }
    };

    const intervalId = setInterval(frame, this.intervalSpeed);
  }

  decreaseProgress(targetElem) {
    if (this.current === 0) return;

    let start = this.current * this.range;
    this.current--;
    const end = this.current * this.range;

    const frame = () => {
      if (start <= end) {
        clearInterval(intervalId);
      } else {
        start--;
        targetElem.style.width = start + "%";
      }
    };

    const intervalId = setInterval(frame, this.intervalSpeed);
  }

  render() {
    const progressBar = createElem("div", "progress-bar");
    const span = createElem("span");

    progressBar.appendChild(span);
    this.section.appendChild(progressBar);
  }
}
