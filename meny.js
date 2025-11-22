const menuCollapsed = document.querySelector(".menu-collapsed");
const menu = document.querySelector(".menu");

menuCollapsed.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
});
