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

      this.data.forEach((breed, index) => {
        const { name = "정보없음" } = breed[0];

        const breedTitle = document.createElement("h3");
        breedTitle.className = "breed-title";
        breedTitle.innerText = name;

        const catContainer = document.createElement("div");
        catContainer.className = `cat-container`;

        breed.forEach((cat, idx) => {
          if (idx == 0) return;

          const catWrapper = document.createElement("article");
          catWrapper.className = "cat-wrapper";

          const catImage = document.createElement("img");
          catImage.className = "cat-image";
          catImage.src = cat.url;

          const catId = document.createElement("div");
          catId.className = "cat-id";
          catId.innerText = cat.id;

          catWrapper.appendChild(catImage);
          catWrapper.appendChild(catId);
          catContainer.appendChild(catWrapper);
        });

        breedContainer.appendChild(breedTitle);
        breedContainer.appendChild(catContainer);
      });

      this.section.appendChild(breedContainer);
    }
  }
}
