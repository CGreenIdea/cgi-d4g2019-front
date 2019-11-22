import { Constants } from './constant.mjs';

export function submitLogin()
{
    let form = document.getElementById("loginForm");
    if(form.checkValidity())
    {
        eraseCookie();
        form.submit();
    }
}

export function checkUser()
{
    if(getCookie('quarkus-credential') == "")
    {
        document.getElementById("menu").style.display = "none";
        document.getElementById("power").style.display = "none";
        document.getElementById("utilisateur").innerHTML = "";
    }else{
        document.getElementById("menu").style.display = "block";
        document.getElementById("power").style.display = "block";
        var username = getCookie('quarkus-username');
        if(username == "")
        {
            setUser();
            /* [{"firstName":"Martin","home":{"city":"Assencières","constructionYear":1908,"heatSource":"fuel","id":1,"label":"A","nbRooms":3,"street":"impasse des Lilas","streetNb":"1","surface":70,"type":1,"zipCode":"10220"},"id":1,"lastName":"Pierre "}] */
            //username = user['content'].firstName;
            //setCookie('quarkus-username', username);
        }
        document.getElementById("utilisateur").innerHTML = username;
    }
}

function setUser() {
    var xhttp = new XMLHttpRequest();
    xhttp.withCredentials = true;
    xhttp.onreadystatechange = function ()
    {
        if (this.readyState == 4)
        {
            var user = JSON.parse(this.responseText);
            setCookie('quarkus-username',user[0].firstName+', '+user[0].lastName);
        }
    };
    xhttp.open('GET', `${Constants.serverBaseUrl}/tenant/mine`, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}
export function logout()
{
    eraseCookie();
    document.location = "/";
}

function getCookie(cname)
{
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function eraseCookie()
{
    var dtExpireDel = new Date();
    dtExpireDel.setTime(dtExpireDel.getTime() - 1);
    setCookie('quarkus-credential', '', dtExpireDel, '/');
}

function setCookie(nom, valeur, expire, chemin, domaine, securite){
     document.cookie = nom + ' = ' + escape(valeur) + '  ' +
               ((expire == undefined) ? '' : ('; expires = ' + expire.toGMTString())) +
               ((chemin == undefined) ? '' : ('; path = ' + chemin)) +
               ((domaine == undefined) ? '' : ('; domain = ' + domaine)) +
               ((securite == true) ? '; secure' : '');
   }
