let button = document.querySelector("button.menu");
let menu = document.querySelector("ul.navigation");

button.addEventListener("click", () => {
    menu.classList.toggle("opened");
});