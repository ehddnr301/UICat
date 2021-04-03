import { api } from "./api/catAPI.js";
import Header from "./components/Header.js";
import ResultSection from "./components/resultSection.js";
import { getItem, setItem } from "./util/sessionStorage.js";

export default class App {
  constructor($target) {
    this.UIObject = { contextMenu: (e) => console.log(e) };
    let data = getItem("data");

    const header = new Header({
      $target,
      buttonClick: async () => {
        const { isError, data: newData } = await api.fetchRandomCats();

        if (!isError) {
          const UI = document.querySelector(".ui-select");
          setItem("data", data || newData);
          data = getItem("data");
          resultSection.setState(data);

          if (UI.value === "null") return;

          resultSection.setUI(UI.value);
        }
      },
      UIArray: Object.keys(this.UIObject),
    });

    const resultSection = new ResultSection({
      $target,
      UIObject: this.UIObject,
    });
  }
}
