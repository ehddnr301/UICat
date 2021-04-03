import { createElem } from "../util/createElement.js";

export default class Header {
  constructor({ $target, buttonClick, UIArray = [] }) {
    this.header = document.createElement("header");
    this.header.className = "header";
    this.buttonClick = buttonClick;
    this.data = [];
    this.UIArray = UIArray;

    $target.appendChild(this.header);

    this.render();
  }

  render() {
    const Title = createElem("h1", "header__title");
    Title.innerText = "UI with Cat";
    const catButton = createElem("button", "cat-button");
    catButton.innerText = "고양이 소환";
    catButton.addEventListener("click", this.buttonClick);

    const optionBox = createElem("div", "option-box");

    const select = createElem("select", "ui-select");
    this.UIArray.map((UI, idx) => {
      const option = createElem("option", "ui-option");
      option.value = UI;
      option.innerText = UI;
      if (idx === 0) {
        const initialOption = createElem("option");
        initialOption.innerText = "UI옵션을 선택해주세요.";

        select.appendChild(initialOption);
      }

      select.appendChild(option);
    });

    this.header.appendChild(Title);
    optionBox.appendChild(catButton);
    optionBox.appendChild(select);
    this.header.appendChild(optionBox);
  }
}
