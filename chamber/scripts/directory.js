const url = 'data/members.json';
const cards = document.getElementById("companies");


var getCompanyData = async function (url) {
    const response = await fetch(url);
    const data = await response.json();
    return data.companies;
}


const displayCompanies = (companies) => {
    companies.forEach((company) => {
        let card = document.createElement("div");
        let companyName = document.createElement("h2");
        let icon = document.createElement("img");
        let address = document.createElement("div");
        let phone = document.createElement("div");
        let website = document.createElement("a");
        let level = document.createElement("div");
        let about = document.createElement("p");

        companyName.innerHTML = company.name;
        icon.src = company.imageUrl;
        icon.alt = `Logo of ${company.name}`;
        icon.loading = 'lazy';
        icon.classList.add("logo");
        address.innerHTML = company.address;
        phone.innerHTML = company.phoneNumber;
        website.innerHTML = company.websiteUrl;
        website.setAttribute("href", company.websiteUrl)
        level.innerHTML = company.membershipLevel;
        about.innerHTML = company.description;
        card.appendChild(companyName);
        card.appendChild(icon);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(level);
        card.appendChild(about);
        cards.appendChild(card);
    });
}
async function populateCompanies() {
    result = await getCompanyData(url);
    displayCompanies(result);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function populateAds() {
    let result = await getCompanyData(url);
    let maxCount = result.length - 1;
    let goldCompany = {};
    goldCompany.name = "";
    let silverCompany = {};
    let tryCount = 0;
    silverCompany.name = "";
    while ((goldCompany.name === "" || silverCompany.name === "") && tryCount < 100) {
        tryCount++;
        let currentCompany = result[getRandomInt(0, maxCount)];
        if (currentCompany.membershipLevel == "silver") {
            if (silverCompany.name === "") {
                silverCompany = currentCompany;
            }
        }
        else if (currentCompany.membershipLevel == "gold") {
            if (goldCompany.name === "") {
                goldCompany = currentCompany;
            } else if (silverCompany.name === "" && goldCompany.name !== currentCompany.name) {
                silverCompany = currentCompany;
            }
        }
    }
    displayAd(silverCompany, "silver-ad")
    displayAd(goldCompany, "gold-ad")
}
function displayAd(company, adSlotId) {
    let adSlot = document.getElementById(adSlotId);
    let adHeader = document.createElement("h2");
    let adCompanyName = document.createElement("div");
    let adCompanyPhone = document.createElement("div");
    let adCompanyAddress = document.createElement("p");
    let adCompanyDescription = document.createElement("p");
    adCompanyName.innerHTML = company.name;
    adCompanyName.classList.add("ad-name");
    adCompanyPhone.innerHTML = company.phoneNumber;
    adCompanyPhone.classList.add("ad-phone");
    adCompanyAddress.innerHTML = company.address;
    adCompanyAddress.classList.add("ad-address");
    adCompanyDescription.innerHTML = company.description;
    adCompanyDescription.classList.add("ad-description");
    adSlot.appendChild(adCompanyName);
    adSlot.appendChild(adCompanyPhone);
    adSlot.appendChild(adCompanyAddress);
    adSlot.appendChild(adCompanyDescription);
}






async function onPageLoad() {
    let url = window.location.href;
    if (url.includes("directory.html")) {
        await populateCompanies();
    }
    if (url.includes("index.html")) {
        await populateAds();
    }
}

window.onload = onPageLoad;
