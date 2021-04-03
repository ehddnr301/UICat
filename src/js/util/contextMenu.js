import { addCss } from "./addCss.js";

export const contextMenu = (e) => {
  let targetElem = e.target;

  if (e.target.tagName.toLowerCase() === "img") {
    targetElem = targetElem.parentNode;
  }
  if (!targetElem.classList.contains("item")) return;

  const items = Array.from(targetElem.parentNode.children);

  targetElem.classList.toggle("open");

  items.forEach((item) => {
    if (item !== targetElem) item.classList.remove("open");
  });
};
