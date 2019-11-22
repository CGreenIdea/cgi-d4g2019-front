
import { Constants } from './constant.mjs';

export function callRest(serviceUrl, method, jsonData) {
    var xhttp = new XMLHttpRequest();
    xhttp.withCredentials = true;

    xhttp.onreadystatechange = function () {
        console.log(`Service response status code: ${this.status}`);
        if (this.readyState == 4) {
            console.log(`Service response: ${this.responseText}`);
            return { status: this.status, content: this.responseText };
        }
    };

    //TODO: see if headers are needed

    xhttp.open(method, `${Constants.serverBaseUrl}/${serviceUrl}`, true);
    xhttp.setRequestHeader("Content-type", "application/json");

    console.log(`Calling service: ${Constants.serverBaseUrl}/${serviceUrl}`);
    console.log(`Service JSON data sent: ${jsonData}`);

    try {
        if (jsonData != "")
            xhttp.send(jsonData);
        else
            xhttp.send();
    }
    catch { }
}
