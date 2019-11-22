export function generateSVG()
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
    var jsonData = '[{"date":"2019-01-01","energy":6019},{"date":"2019-01-02","energy":768},{"date":"2019-01-03","energy":6219},{"date":"2019-01-04","energy":2041},{"date":"2019-01-05","energy":7141},{"date":"2019-01-06","energy":3706},{"date":"2019-01-07","energy":7342},{"date":"2019-01-08","energy":4110},{"date":"2019-01-09","energy":3538},{"date":"2019-01-10","energy":4574},{"date":"2019-01-11","energy":6019},{"date":"2019-01-12","energy":768},{"date":"2019-01-13","energy":6219},{"date":"2019-01-14","energy":2041},{"date":"2019-01-15","energy":7141},{"date":"2019-01-16","energy":3706},{"date":"2019-01-17","energy":7342},{"date":"2019-01-18","energy":4110},{"date":"2019-01-19","energy":3538},{"date":"2019-01-20","energy":4574},{"date":"2019-01-21","energy":6019},{"date":"2019-01-22","energy":768},{"date":"2019-01-23","energy":6219},{"date":"2019-01-24","energy":2041},{"date":"2019-01-25","energy":7141},{"date":"2019-01-26","energy":3706},{"date":"2019-01-27","energy":7342},{"date":"2019-01-28","energy":4110},{"date":"2019-01-29","energy":3538},{"date":"2019-01-30","energy":4574},{"date":"2019-01-31","energy":6019}]';
    var datas = JSON.parse(jsonData);
    var nbcols = datas.length;
    var maxConso = 0;
    var colWidth = parseInt((1160 - (nbcols * 5)) / nbcols);
    for(var i=0;i<nbcols;i++)
    {
        if(datas[i].energy > maxConso)maxConso=datas[i].energy;
    }
    var maxH = maxConso/340
    for(var i=0;i<nbcols;i++)
    {
        var conso = datas[i].energy;
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
