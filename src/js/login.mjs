import { Constants } from './constant.mjs';

export function submitLogin() {
    let form = document.getElementById("loginForm");
    if (form.checkValidity()) {
        var dtExpireDel = new Date();
        dtExpireDel.setTime(dtExpireDel.getTime() - 1);
        setCookie('quarkus-credential', '', dtExpireDel, '/');
        form.submit();
    }
}

export function correctFormActionUrl(formId, url) {
    const actLink = `${Constants.serverBaseUrl}/${url}`;
    document.getElementById(formId).action = actLink;
}

function setCookie(nom, valeur, expire, chemin, domaine, securite) {
    document.cookie = nom + ' = ' + escape(valeur) + '  ' +
        ((expire == undefined) ? '' : ('; expires = ' + expire.toGMTString())) +
        ((chemin == undefined) ? '' : ('; path = ' + chemin)) +
        ((domaine == undefined) ? '' : ('; domain = ' + domaine)) +
        ((securite == true) ? '; secure' : '');
}
