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

populateCompanies();
