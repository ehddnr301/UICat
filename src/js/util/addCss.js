export const undoCss = () => {
  const links = document.getElementsByTagName("link");
  for (let i = 0; i < links.length; i++) {
    if (i < 4) continue;

    links[i].remove();
  }
};

export const addCss = (name) => {
  const head = document.getElementsByTagName("head")[0];
  const style = document.createElement("link");
  style.href = `./css/component/${name}.css`;
  style.type = "text/css";
  style.rel = "stylesheet";

  undoCss();

  head.append(style);
};
