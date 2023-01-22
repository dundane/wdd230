let timeSinceLastVisit = document.querySelector("#last-visit");
let currentDateTime = Date.now();

let lastVisit = Number(window.localStorage.getItem("last-visit-date")) || 0;

if (lastVisit > 0) {

    let dateDifference = currentDateTime - lastVisit;
    let dayMiliseconds = 1000 * 60 * 60 * 24;
    let daysSinceLastVisit = Math.round(dateDifference / dayMiliseconds);

    timeSinceLastVisit.innerHTML = "Last time you visited this site was " + daysSinceLastVisit + " days ago";
}

window.localStorage.setItem("last-visit-date", currentDateTime);