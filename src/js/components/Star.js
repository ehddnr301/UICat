export default class Star {
  constructor($target) {
    this.$target = $target;
    this.star_score = 0;
    this.MAX_SCORE = 5;
  }

  setDisplayScore(score) {
    const starArray = [...this.$target.children];
    starArray.forEach((star, i) => {
      if (score > i) {
        if (score - i === 0.5) {
          star.className = "star half";
        } else {
          star.className = "star full";
        }
      } else {
        star.className = "star empty";
      }
    });
  }

  setScore(score) {
    this.setDisplayScore(score);
    this.star_score = score;
  }

  calculateScore(e) {
    const { width, left } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left + 1;
    const scale = width / this.MAX_SCORE / 2;
    const score = Math.floor(x / scale) / 2;

    return score;
  }

  render() {
    Array(this.MAX_SCORE)
      .fill()
      .forEach(() => {
        const star = document.createElement("div");
        star.className = "star empty";
        this.$target.appendChild(star);
      });

    this.$target.addEventListener("click", (e) => {
      this.setScore(this.calculateScore(e));
    });
    this.$target.addEventListener("mousemove", (e) => {
      const score = this.calculateScore(e);
      this.setDisplayScore(score);
    });
    this.$target.addEventListener("mouseleave", (e) => {
      this.setDisplayScore(this.star_score);
    });
  }
}
