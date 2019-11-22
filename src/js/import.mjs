import { Constants } from './constant.mjs';

export function callHousingList() {
    var xhttp = new XMLHttpRequest();
    xhttp.withCredentials = true;
    xhttp.open('GET', `${Constants.serverBaseUrl}/home/all`, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.onreadystatechange = function () {
        console.log(`Service response status code: ${this.status}`);
        if (this.readyState == 4) {
            constructList(this.responseText);
        }
    };
    xhttp.send();
}

function constructList(data) {
    if (data != null) {
        var objData = JSON.parse(data);
        if (objData != null && objData.length > 0) {
            objData.forEach(element => {
                if (element.label != "") {
                    var inputSelect = document.getElementById("adminHousingSelect");
                    inputSelect.options[inputSelect.options.length] = new Option(element.label, element.id);
                }
            });
        }
    }
}