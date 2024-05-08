let tableRow = "";

const countries = [
    {
        region: "Asia",
        name: "Bangladesh",
        code: "BD"
    },
    {
        region: "Asia",
        name: "India",
        code: "IN",
    },
    {
        region: "Asia",
        name: "Srilanka",
        code: "SL",
    },
    {
        region: "Asia",
        name: "Pakistan",
        code: "PK",
    },
];

for (const country2 of countries) {
    tableRow += `
    <td>${country2.region}</td>
    <td>${country2.name}</td>
    <td>${country2.code}</td>`;

}

function loadData() {
    const tbodyOfTable2 = document.querySelector("#sampleTable2 tbody");
    tbodyOfTable2.innerHTML = `<tr>${tableRow}</tr>`;
}