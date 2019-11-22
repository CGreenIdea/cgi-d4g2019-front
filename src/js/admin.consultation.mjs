import { Constants } from './constant.mjs';

export function callGetConsultationData() {

    var xhttp = new XMLHttpRequest();
    xhttp.withCredentials = true;
    xhttp.open('GET', `${Constants.serverBaseUrl}/consumption/all`, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.onreadystatechange = function () {
        console.log(`Service response status code: ${this.status}`);
        if (this.readyState == 4) {
            constructDataTable(this.responseText);
        }
    };
    xhttp.send();
}

function constructDataTable(data) {
    var dataObj = JSON.parse(data);
    if (dataObj != null && dataObj.length > 0) {
        var tbData = document.getElementById("tableConsultAdminConsumption");
        dataObj.forEach(element => {

            var row = tbData.insertRow(1);
            var cellDate = row.insertCell(0);
            var cellLabel = row.insertCell(1);
            var cellHeatType = row.insertCell(2);
            var cellEnergy = row.insertCell(3);

            cellDate.innerHTML = displayConsumptionDate(element.readingDate);
            cellDate.classList.add("tableMatriceLeftCol");
            cellLabel.innerHTML = element.home.label;
            cellLabel.classList.add("tableMatriceLabelCol");
            cellHeatType.innerHTML = element.home.heatSource;
            cellHeatType.classList.add("tableMatriceHeatCol");
            cellEnergy.innerHTML = `${element.energy} kWh`;
            cellEnergy.classList.add("tableMatriceRightCol");
        });
    }
}

function displayConsumptionDate(readingDate) {
    const dt = new Date(readingDate);
    return `${dt.getDate()}/${("0" + (dt.getMonth() + 1)).slice(-2)}/${dt.getFullYear()}`;
}