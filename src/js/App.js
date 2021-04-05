import { api } from "./api/catAPI.js";
import Header from "./components/Header.js";
import Loading from "./components/Loading.js";
import ResultSection from "./components/resultSection.js";
import { addCss, undoCss } from "./util/addCss.js";
import AnalogClock from "./util/analogClock.js";
import { contextMenu } from "./util/contextMenu.js";
import InfiniteScroll from "./util/infiniteScroll.js";
import ScrollIndicator from "./util/scrollIndicator.js";
import { getItem, setItem } from "./util/sessionStorage.js";

export default class App {
  constructor($target) {
    this.UIObject = {
      contextMenu: {
        isClickevent: true,
        func: (e) => contextMenu(e),
        removeFunc: () => null,
      },
      scrollIndicator: {
        isClickevent: false,
        func: () => scrollIndicator.addScrollIndicator(),
        removeFunc: () => scrollIndicator.removeScrollIndicator(),
      },
      analogClock: {
        isClickevent: false,
        func: () => analogClock.addAnalogClock(),
        removeFunc: () => analogClock.removeAnalogClock(),
      },
    };

    const header = new Header({
      $target,
      buttonClick: () => this.onClick(resultSection, loading),
      UIArray: Object.keys(this.UIObject),
    });

    const resultSection = new ResultSection({
      $target,
    });

    const scrollIndicator = new ScrollIndicator({
      $target,
    });

    const analogClock = new AnalogClock({
      $target,
    });

    const loading = new Loading({
      $target,
    });

    infiniteScroll.addInfiniteScroll();
  }

  removeEventListener() {
    const container = document.querySelector(".item-container");

    for (const [key, { isClickevent, func, removeFunc }] of Object.entries(
      this.UIObject
    )) {
      if (isClickevent) {
        container.removeEventListener("click", func);
      } else {
        removeFunc();
      }
    }
  }

  async onClick(resultSection, loading) {
    let data = getItem("data");
    loading.toggleLoading();
    const { isError, data: newData } = await api.fetchRandomCats();
    loading.toggleLoading();

    if (!isError) {
      const { value: UI } = document.querySelector(".ui-select");
      setItem("data", data || newData);
      data = getItem("data");
      resultSection.setState(data);
      this.removeEventListener();

      if (UI === "null") {
        undoCss();

        return;
      }

      if (!this.UIObject[UI].isClickevent) this.UIObject[UI].func();
      else {
        const onClick = this.UIObject[UI].func;
        resultSection.setUI(onClick);
      }
      addCss(UI);
    }
  }

  async onScroll(resultSection) {
    const { isError, data: newData } = await api.fetchRandomCats(5);

    if (!isError) {
      let data = getItem("data");
      data = data.concat(newData);
      setItem("data", data);
      resultSection.setState(data);
    }
  }
}
