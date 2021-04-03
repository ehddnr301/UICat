import { api } from "./api/catAPI.js";
import Header from "./components/Header.js";
import ResultSection from "./components/resultSection.js";
import { addCss, undoCss } from "./util/addCss.js";
import { contextMenu } from "./util/contextMenu.js";
import { getItem, setItem } from "./util/sessionStorage.js";

export default class App {
  constructor($target) {
    this.UIObject = { contextMenu: (e) => contextMenu(e) };
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

          if (UI.value === "null") {
            undoCss();

            return;
          }

          resultSection.setUI(UI.value);
          addCss(UI.value);
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
