import { api } from "./api/catAPI.js";
import ResultSection from "./components/ResultSection.js";
import Star from "./components/Star.js";
// import { contextMenu } from "./util/componentUtil/contextMenu.js";
import { getItem, setItem } from "./util/sessionStorage.js";

export default class App {
  constructor($target) {
    const data = getItem("data");

    const resultSection = new ResultSection({
      $target,
      onLoad: async () => {
        const { isError, data: newData } = await api.fetchCats("no");

        if (!isError) {
          setItem("data", data || newData);
          resultSection.setState(data);
          // contextMenu(
          //   document.querySelectorAll(".cat-container"),
          //   document.querySelectorAll(".cat-container .cat-wrapper")
          // );
          const stars = document.querySelector(".stars");
          const star = new Star(stars);
          star.render();
        }
      },
    });
  }
}
