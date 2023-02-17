const apiKey = "efa14e1a26921cdc0ea8ef5c1b9f9244";
const locationId = "4717782";
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?id=${locationId}&units=imperial&appid=${apiKey}`;

const openWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?id=${locationId}&units=imperial&appid=${apiKey}`;

async function apiFetchWeather(fetchUrl) {
    try {
        const response = await fetch(fetchUrl);
        if (response.ok) {
            const data = await response.json();
            console.table(data);
            forecastItems = GetThreeDayForecast(data);
            displayForecastWidget("weather-now", forecastItems[0]);
            displayForecastWidget("weather-tomorrow", forecastItems[1]);
            displayForecastWidget("weather-day-three", forecastItems[2]);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}


async function apiFetchForecast(fetchUrl) {
    try {
        const response = await fetch(fetchUrl);
        if (response.ok) {
            const data = await response.json();
            displayForecastResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function GetThreeDayForecast(data) {
    let forecast = [];
    forecast.push(populateWeatherWidgetData(data.list[0]))
    forecast.push(populateWeatherWidgetData(data.list[8]))
    forecast.push(populateWeatherWidgetData(data.list[16]))
    return forecast;
}

function populateWeatherWidgetData(data) {
    let widgetData = {};
    let widgetDate = new Date(data.dt_txt);
    widgetData.Date = widgetDate.toLocaleString('default', { month: 'short' }) + " " + widgetDate.getDate();
    widgetData.Temprature = data.main.temp;
    widgetData.IconSource = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    widgetData.Description = data.weather[0].description;
    return widgetData;
}

apiFetchWeather(forecastUrl);

function displayForecastWidget(containerName, widgetData) {
    const container = document.getElementById(containerName);
    const forcastDate = document.createElement("h3")
    forcastDate.classList.add('forcast-date');


    const currentTemp = document.createElement("div")
    currentTemp.classList.add('current-temp');



    const imageContainer = document.createElement("figure")
    imageContainer.classList.add('weather-icon-container');
    const weatherIcon = document.createElement("img");
    weatherIcon.classList.add("weather-icon");
    const captionDescription = document.createElement("div");
    captionDescription.classList.add('weather-caption');
    forcastDate.innerHTML = widgetData.Date;
    currentTemp.innerHTML = `${widgetData.Temprature}&deg;F`;
    const iconsrc = widgetData.IconSource;
    let desc = widgetData.Description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDescription.textContent = `${desc}`;
    container.appendChild(forcastDate);
    container.appendChild(currentTemp);
    container.appendChild(imageContainer);
    imageContainer.appendChild(weatherIcon);
    container.appendChild(captionDescription);

}


function displayForecastResult(container, data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}


