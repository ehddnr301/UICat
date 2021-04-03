import { createElem } from "../util/createElement.js";

export default class Item {
  constructor({ $target, data, onClick }) {
    this.data = data;
    this.item = createElem("article", "item");
    this.item.dataset.id = data.id;
    this.item.addEventListener("click", onClick);
    $target.appendChild(this.item);

    this.render();
  }

  render() {
    const url = this.data.url;
    const { name, origin } =
      this.data.breeds.length > 0
        ? this.data.breeds[0]
        : { name: "정보없음", origin: "정보없음" };

    const itemImage = createElem("img", "item-image");
    itemImage.src = url;

    const itemInfo = createElem("article", "cat-info");

    const catName = createElem("p", "cat-name");
    catName.innerText = name;

    const catOrigin = createElem("p", "cat-origin");
    catOrigin.innerText = origin;

    itemInfo.appendChild(catName);
    itemInfo.appendChild(catOrigin);
    this.item.appendChild(itemImage);
    this.item.appendChild(itemInfo);
  }
}
