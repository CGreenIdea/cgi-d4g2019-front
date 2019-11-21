const serverBaseUrl = "http://localhost:8080/";

function callRest(serviceUrl, method, jsonData){
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
             console.log(this.responseText);
             return this.responseText;
         }
    };

    //TODO: see if headers are needed
    //TODO: pass cookie auth

    xhttp.open(method, serverBaseUrl + "/" + serviceUrl, true);
    xhttp.setRequestHeader("Content-type", "application/json");

    if(jsonData != "")
        xhttp.send("Your JSON Data Here");
}
