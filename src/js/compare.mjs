import { Constants } from './constant.mjs';

export function callCompare() {
    var xhttp = new XMLHttpRequest();
    xhttp.withCredentials = true;
    xhttp.onreadystatechange = function ()
    {
        if (this.readyState == 4)
        {
            var kwh = parseInt(parseFloat(this.responseText)*10)/10;
            var kkwh = kwh.toString();
            document.getElementById('lab_eco').innerHTML = `moyenne : ${kkwh.replace('.',',')} kWh`;
            var xg = (parseInt(kwh) * 7)/100;
            document.getElementById('lab_eco').style.left = xg+'px';
            document.getElementById('tri_eco').style.left = xg+'px';
        }
    };
    xhttp.open('GET', `${Constants.serverBaseUrl}/consumption/average`, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}
