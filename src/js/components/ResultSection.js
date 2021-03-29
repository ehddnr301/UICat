export default class ResultSection {
  constructor({ $target, onLoad }) {
    this.onLoad = onLoad;
    this.data = [];
    this.section = document.createElement("section");
    this.section.className = "result-section";

    $target.appendChild(this.section);

    this.onLoad();
    this.render();
  }

  setState(data) {
    this.data = data;

    this.render();
  }

  render() {
    if (!this.data) return;
    this.section.innerHTML = "";
    if (this.data.length > 0) {
      console.log(this.data);

      const breedContainer = document.createElement("div");
      breedContainer.className = "breed-container";

      this.data.forEach((breed) => {
        const { name = "정보없음" } = breed[0];

        const breedTitle = document.createElement("h3");
        breedTitle.className = "breed-title";
        breedTitle.innerText = name;

        breedContainer.appendChild(breedTitle);
      });

      this.section.appendChild(breedContainer);
    }
  }
}
