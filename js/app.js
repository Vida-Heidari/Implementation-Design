const menu = document.querySelector(".navbar__nav");
const menuOpenBtn = document.querySelector(".navbar__open-btn");
const menuCloseBtn = document.querySelector(".navbar__close-btn");

menuOpenBtn.addEventListener("click", () => {
  menu.classList.add("menu--open");
  menu.style.transition = "300ms ease-in-out";
});

menuCloseBtn.addEventListener("click", () => {
  menu.classList.remove("menu--open");
});

window.addEventListener("resize", () => {
  menu.classList.remove("menu--open");
  menu.style.transition = "none";
});
