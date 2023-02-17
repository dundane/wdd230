let chamberAd = document.getElementById("chamber-meeting-ad");

function alertForChamberMeeting() {
    let currentDay = new Date();
    let daysUntilWednesday = (3 - currentDay.getDay() + 7) % 7;
    let nextWednesday = new Date(currentDay.getTime() + daysUntilWednesday * 24 * 60 * 60 * 1000);

    let dayOfTheWeek = currentDay.getDay();
    if (dayOfTheWeek > 0 && dayOfTheWeek < 4) {
        chamberAd.innerHTML = `Join us for our next chamber of commerce meeting Wednesday ${nextWednesday.getMonth()}-${nextWednesday.getDate()}-${nextWednesday.getFullYear()}`;
    } else {
        chamberAd.innerHTML = "";
    }
}

alertForChamberMeeting();