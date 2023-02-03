const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.getElementById("cards");


var getProphetData = async function (url) {
    const response = await fetch(url);
    const data = await response.json();
    return data.prophets;
}


const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let portrait = document.createElement("img");
        let prophetFullName = `${prophet.name} ${prophet.lastname}`;
        fullName.innerHTML = prophetFullName;
        portrait.src = prophet.imageurl;
        portrait.alt = `Portrait of ${prophetFullName}`;
        portrait.loading = 'lazy';
        portrait.setAttribute("width", "180");
        portrait.setAttribute("height", "224");
        card.appendChild(fullName);
        card.appendChild(portrait);
        cards.appendChild(card);
    });
}
async function populateProphets() {
    result = await getProphetData(url);
    displayProphets(result);
}

populateProphets();
