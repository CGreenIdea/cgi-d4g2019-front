import { Constants } from './constant.mjs';

export function slideSubscriptionNext(num) {
    changeClass('creation_' + num, 'divGauche');
    changeClass('creation_' + (num + 1), 'divMilieu');
}
//"divGauche"
// "divMilieu"
export function slideSubscriptionPrevious(num) {
    changeClass('creation_' + num, 'divDroite');
    changeClass('creation_' + (num - 1), 'divMilieu');
}
//"divDroite"
//"divMilieu"
export function checkChangeToOwner(num) {
    if (document.getElementById("subscriptionIsOwner").checked) {
        changeClass('creation_' + num, 'divGauche');
        changeClass('creation_' + (num + 2), 'divMilieu');
    }
    else
        slideSubscriptionNext(num);
}

export function checkDisclaimer(ele)
{
    if(ele.checked)
    {
        changeClass('finish', 'gButton greenButton droite');
    }else{
        changeClass('finish', 'gButton greyButton droite');
    }
}

function changeClass(id, cl) {
    document.getElementById(id).className = cl;
}


export function submitSubscriptionForm() {
    let form = document.getElementById("loginForm");
    if (form.checkValidity()) {
        let login = document.getElementById("loginForm");
        let pass = document.getElementById("subscriptionPass");
        let passConfirm = document.getElementById("subscriptionPassConfirm");

        if (pass == passConfirm) {
            var xhttp = new XMLHttpRequest();
            var body = `{"username":"${login}", "password":"${pass}", "passwordConfirm":"${passConfirm}"}`;

            xhttp.open("POST", `${Constants.serverBaseUrl}/user​/register`, true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(JSON.stringify(body));
        }
    }
}
