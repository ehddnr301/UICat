import { api } from "./api/catAPI.js";
import Header from "./components/Header.js";
import { getItem, setItem } from "./util/sessionStorage.js";

export default class App {
  constructor($target) {
    let data = getItem("data");

    const header = new Header({
      $target,
      buttonClick: async () => {
        const { isError, data: newData } = await api.fetchCats("no");

        if (!isError) {
          setItem("data", data || newData);
          data = getItem("data");
        }
      },
      UIArray: ["contextMenu"],
    });
  }
}
