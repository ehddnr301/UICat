export default class InfiniteScroll {
  constructor({ onScroll }) {
    this.infiniteScroll = async () => {
      if (this.getScroll() < 90) return;

      onScroll();
    };
  }

  throttle(func, delay) {
    let throttled = false;

    return (...args) => {
      if (!throttled) {
        throttled = true;
        setTimeout(() => {
          func(...args);
          throttled = false;
        }, delay);
      }
    };
  }

  addInfiniteScroll() {
    window.addEventListener("scroll", this.throttle(this.infiniteScroll, 3000));
  }

  removeInfiniteScroll() {
    window.removeEventListener("scroll", this.infiniteScroll);
  }

  getScroll() {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    const contentHeight = scrollHeight - clientHeight;
    const percent = (scrollTop / contentHeight) * 100;

    return percent;
  }
}
