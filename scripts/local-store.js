let visitsElement = document.querySelector("#page-visits");

let numberOfVisits = Number(window.localStorage.getItem("visit-count")) || 0;

numberOfVisits++;

window.localStorage.setItem("visit-count", numberOfVisits);

visitsElement.innerHTML = "You have visited this site " + numberOfVisits + " times";