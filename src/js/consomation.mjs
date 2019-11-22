import { Constants } from './constant.mjs';

export function generateSVG(jsonData)
{
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1200 400" width="1200" height="400">';
   /* cadre */
    svg += '<line x1="0" y1="0" x2="0" y2="400" stroke="grey" />';
    svg += '<line x1="1200" y1="0" x2="1200" y2="400" stroke="grey" />';
    svg += '<line x1="0" y1="0" x2="1200" y2="0" stroke="grey" />';
    svg += '<line x1="0" y1="400" x2="1200" y2="400" stroke="grey" />';
    /* axes y */
    svg += '<line x1="20" y1="20" x2="20" y2="380" stroke="black" />';
    svg += '<line x1="20" y1="20" x2="15" y2="30" stroke="black" />';
    svg += '<line x1="20" y1="20" x2="25" y2="30" stroke="black" />';
    /* axe x */
    svg += '<line x1="20" y1="380" x2="1180" y2="380" stroke="black" />';
    svg += '<line x1="1170" y1="375" x2="1180" y2="380" stroke="black" />';
    svg += '<line x1="1170" y1="385" x2="1180" y2="380" stroke="black" />';

    /* boucle sur les valeurs */
    var nbcols = jsonData.length;
    var maxConso = 0;
    var colWidth = parseInt((1160 - (nbcols * 5)) / nbcols);
    for(var i=0;i<nbcols;i++)
    {
        if(datas[i].energy > maxConso)maxConso=datas[i].energy;
    }
    var maxH = maxConso/340
    for(var i=0;i<nbcols;i++)
    {
        var conso = jsonData[i].energy;
        var x = 25 + (i * colWidth + 5 * i);
        var h = conso / maxH;
        var y = 380-h;
        var d = i * 0.05;
        svg += '<rect x="'+x+'" y="380" width="' + colWidth + '" height="0" stroke="blue" fill="blue" onmouseout="document.getElementById(\'conso'+i+'\').style.display=\'none\'" onmousemove="document.getElementById(\'conso'+i+'\').style.display=\'block\'">';

        svg += '<animate attributeType="CSS" attributeName="height" from="0" to="'+h+'" dur="0.5s" repeatCount="0" begin="'+d+'s" fill="freeze"/>';
        svg += '<animate attributeType="CSS" attributeName="y" from="380" to="'+y+'" dur="0.5s" repeatCount="0" begin="'+d+'s" fill="freeze"/>';
        svg += '</rect>';
        svg += '<text id="conso'+i+'" style="font-size:0.8em;display:none;fill:#000" x="'+x+'" y="'+(y-10)+'">'+conso+'</text>';

        svg += '<text style="fill:#888" x="'+(x+5)+'" y="395">'+(i+1)+'</text>';
    }

    svg += '/>';
    document.getElementById("histogramme").innerHTML = svg;
}

export function rangeConso(idStart, idEnd) {
    var dateStart = document.getElementById(idStart).value;
    var dateEnd = document.getElementById(idEnd).value;
    var xhttp = new XMLHttpRequest();
    xhttp.withCredentials = true;
    xhttp.onreadystatechange = function ()
    {
        if (this.readyState == 4)
        {
            generateSVG(JSON.parse(this.responseText))
        }
    };
    xhttp.open('GET', `${Constants.serverBaseUrl}/consumption/range/${dateStart}/${dateEnd}`, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}
