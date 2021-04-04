import { createElem } from "../util/createElement.js";
import Item from "./Item.js";

export default class ResultSection {
  constructor({ $target }) {
    this.data = [];
    this.onClick = null;
    this.UI = null;
    this.section = createElem("section", "result-section");

    $target.appendChild(this.section);

    this.render();
  }

  setUI(onClick) {
    this.onClick = onClick;

    this.render();
  }

  setState(data) {
    this.data = data;

    this.render();
  }

  render() {
    if (this.data.length === 0) return;

    this.section.innerHTML = "";

    const itemContainer = createElem("div", "item-container");
    this.data.forEach((cat) => {
      new Item({
        $target: itemContainer,
        data: cat,
      });
    });
    itemContainer.addEventListener("click", this.onClick);

    this.section.appendChild(itemContainer);
  }
}
