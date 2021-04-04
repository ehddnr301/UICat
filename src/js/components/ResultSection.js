import { createElem } from "../util/createElement.js";
import Item from "./Item.js";

export default class ResultSection {
  constructor({ $target, UIObject }) {
    this.data = [];
    this.UIObject = UIObject;
    this.UI = null;
    this.section = createElem("section", "result-section");

    $target.appendChild(this.section);

    this.render();
  }

  setUI(UI) {
    if (!(UI in this.UIObject)) return;

    if (!this.UIObject[UI].isClickevent) this.UIObject[UI].func();

    this.UI = this.UIObject[UI].func;

    this.render();
  }

  setState(data) {
    this.data = data;

    this.render();
  }

  render() {
    if (this.data.length === 0) return;

    this.section.innerHTML = "";

    const hi = (e) => {
      console.log(e);
    };

    const itemContainer = createElem("div", "item-container");
    this.data.forEach((cat) => {
      new Item({
        $target: itemContainer,
        data: cat,
      });
    });
    itemContainer.addEventListener("click", this.UI);

    this.section.appendChild(itemContainer);
  }
}
