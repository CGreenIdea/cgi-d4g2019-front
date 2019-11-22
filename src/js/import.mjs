
export function callHousingList() {
    var response = callRest('home/all', 'GET', '');
    if (response != null)
        constructList(response.responseText);
}

function constructList(data) {
    var objData = JSON.parse(data);
    if (objData != null && objData.length > 0) {
        objData.forEach(element => {
            var inputSelect = document.getElementById("adminHousingSelect");
            inputSelect.add(`<option value="${element.id}">${element.label}</option>`);
        });
    }
}