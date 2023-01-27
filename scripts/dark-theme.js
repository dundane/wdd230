const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const darkModeIcon = "☾";
const lightModeIcon = "☼";


modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes(lightModeIcon)) {
		main.classList.remove("dark-mode");
		main.classList.add("light-mode");
		modeButton.textContent = darkModeIcon;
	} else {
		main.classList.remove("light-mode");
		main.classList.add("dark-mode");

		modeButton.textContent = lightModeIcon;
	}
});