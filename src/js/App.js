import { api } from "./api/catAPI.js";
import ResultSection from "./components/ResultSection.js";
import { getItem, setItem } from "./util/sessionStorage.js";

export default class App {
  constructor($target) {
    const data = getItem("data");

    const resultSection = new ResultSection({
      $target,
      onLoad: async () => {
        const { isError, data } = await api.fetchCats("no");

        if (!isError) {
          setItem("data", data);
          resultSection.setState(data);
        }
      },
    });
  }
}
