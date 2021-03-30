export const contextMenu = (wrappers, items) => {
  wrappers.forEach((wrapper) => {
    wrapper.addEventListener("click", (e) => {
      const targetItem = e.target;

      e.stopPropagation();

      if (!targetItem.classList.contains("cat-wrapper")) return;

      targetItem.classList.toggle("open");
      items.forEach((item) => {
        if (item !== targetItem) item.classList.remove("open");
      });
    });

    document.body.addEventListener("click", (e) => {
      if (e.target.classList.contains("cat-wrapper")) return;

      items.forEach((item) => {
        item.classList.remove("open");
      });
    });
  });
};
