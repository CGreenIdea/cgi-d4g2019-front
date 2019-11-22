import { Constants } from './constant.mjs';

export function callUserDocumentsList() {
    var xhttp = new XMLHttpRequest();
    xhttp.withCredentials = true;
    xhttp.open('GET', `${Constants.serverBaseUrl}/document/mine`, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.onreadystatechange = function () {
        console.log(`Service response status code: ${this.status}`);
        if (this.readyState == 4) {
            constructDocumentList(this.responseText);
        }
    };
    xhttp.send();
}

function constructDocumentList(data)
{
    if (data.lenght > 0)
    {
        var objData = JSON.parse(data);
        if (objData != null && objData.length > 0)
        {
            objData.forEach(element => {
                const divDoc = `
                <div class="file">
                    <img src="/imgs/pdf-svgrepo.svg" alt="${element.title}">
                    <span>${(element.title !== "" ? element.title : element.fileName)}</span>
                    <span>${ displayFileDate(element.creationDate)}</span>
                </div>`;
                document.getElementById("listfiles").innerHTML += divDoc;
                });

        }
    }else{
        document.getElementById("listfiles").innerHTML = '<div class="milieu">Aucun documents disponible actuellement.</div>';
    }
}

function displayFileDate(fileDate) {
    const dt = new Date(fileDate);
    return `${dt.getDate()}/${dt.getMonth()}/${dt.getFullYear()}`;
}
