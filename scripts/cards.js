
let jsonFilePath = "../learningActivities.json";

async function getActivities(jsonPath) {
    try {
        const response = await fetch(jsonPath);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function buildWeeklyInfo(cardData) {
    learningItems = document.getElementById("learning-items");
    let listItem = document.createElement("li");
    let weekName = document.createElement("span");
    weekName.innerHTML = cardData.activities.week;
    listItem.appendChild(weekName);
    cardData.activities.activityList.forEach((activity) => {
        let seperator = document.createElement("span");
        seperator.innerHTML = ` | `;
        let activityLink = document.createElement("a");
        activityLink.setAttribute("href", activity.url);
        activityLink.innerHTML = activity.name
        listItem.appendChild(seperator);
        listItem.appendChild(activityLink);
    });
    learningItems.appendChild(listItem);
}

async function buildLearningCard(jsonFilePath) {
    result = await getActivities(jsonFilePath);
    result.weeks.forEach((week) => {
        buildWeeklyInfo(week);
    });
}


buildLearningCard(jsonFilePath);


