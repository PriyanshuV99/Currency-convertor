const Base_URL = "https://2024-03-06.currency-api.pages.dev/v1/currencies/eur.json";

const dropdown = document.querySelector(".dropdown select");

for(let select of dropdown) {
    for (currCode in countryList) {
        let newoption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        select.append(newOption);
    }
}