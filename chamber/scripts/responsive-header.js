const menuButton = document.querySelector("#menu-button");
const navigationList = document.querySelector("#nav-menu-list");

menuButton.addEventListener("click", () => {
    navigationList.classList.toggle("menu-open");
    menuButton.classList.toggle("menu-open");

})