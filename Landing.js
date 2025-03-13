const menu = document.getElementById("menu");

Array.from(document.getElementsById("menu-item"))
  .forEach((item, index) => {
    item.onmouseover = () => {
      menu.dataset.activeIndex = index;
    }
  });

console.log("test");
