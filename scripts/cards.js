
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
    cardData.forEach((activity) => {
        let listItem = document.createElement("li");
        let weekName = document.createElement("span");
        weekName.innerHTML = activity;
        listItem.appendChild(weekName);
        learningItems.appendChild(listItem);

    });
}

async function buildLearningCard(jsonFilePath) {
    result = await getActivities(jsonFilePath);
    result.forEach((week) => {
        buildWeeklyInfo(week);
    });
}


buildLearningCard(jsonFilePath);


