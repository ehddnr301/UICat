import { createElem } from "./createElement.js";

export default class AnalogClock {
  constructor({ $target }) {
    this.$target = $target;
    this.clock = createElem("div", "clock");
    this.interval = null;
  }
  render() {
    this.clock.innerHTML = "";

    const hour = createElem("div", "bar hour");
    const minute = createElem("div", "bar minute");
    const second = createElem("div", "bar second");

    for (let i = 0; i < 12; i++) {
      const time = createElem("div", `time time${i + 1}`);
      time.innerText = "|";
      this.clock.appendChild(time);
    }

    this.clock.appendChild(hour);
    this.clock.appendChild(minute);
    this.clock.appendChild(second);
    this.$target.appendChild(this.clock);
  }

  getClock() {
    const hourBar = document.querySelector(".bar.hour");
    const minuteBar = document.querySelector(".bar.minute");
    const secondBar = document.querySelector(".bar.second");

    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    secondBar.style.setProperty("--deg", second * 6); // * 60초에 360도 = 1초에 6도
    minuteBar.style.setProperty("--deg", minute * 6 + second * 0.1); // * 1분당 6도, 1초당 0.1도
    hourBar.style.setProperty(
      "--deg",
      hour * 30 + minute * 0.5 + second * (0.5 / 60)
    ); // * 1시간당 30도, 1분당 0.5, 1초당 0.0083도
  }

  addAnalogClock() {
    this.render();

    this.interval = setInterval(this.getClock, 1000);
  }

  removeAnalogClock() {
    clearInterval(this.interval);
  }
}
