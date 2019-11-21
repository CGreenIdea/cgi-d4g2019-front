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

export function checkDisclaimer(ele) {
    if (ele.checked) {
        changeClass('finish', 'gButton greenButton droite');
    } else {
        changeClass('finish', 'gButton greyButton droite');
    }
}

function changeClass(id, cl) {
    document.getElementById(id).className = cl;
}

export function submitSubscriptionForm() {
    let form = document.getElementById("subscriptionFormUser");
    if (form.checkValidity()) {
        let pass = document.getElementById("subscriptionPass").value;
        let passConfirm = document.getElementById("subscriptionPassConfirm").value;

        if (pass == passConfirm) {
            var xhttp = new XMLHttpRequest();

            var user = {
                username: document.getElementById("subscriptionEmail").value,
                password: pass,
                passwordConfirm: passConfirm
            }

            var home = {
                city: document.getElementById("subscriptionCity").value,
                constructionYear: document.getElementById("subscriptionYear").value,
                heatSource: document.getElementById("subscriptionHeat").value,
                nbRooms: document.getElementById("subscriptionRooms").value,
                street: document.getElementById("subscriptionAddress").value,
                surface: document.getElementById("subscriptionSurface").value,
                type: document.getElementById("subscriptionHousingType").value,
                zipCode: document.getElementById("subscriptionZipCode").value,
                label: "",
                streetNb: ""
            }

            var body = {
                home: home,
                landlord: getLandlord(),
                tenant: {
                    firstName: document.getElementById("subscriptionFirstName").value,
                    lastName: document.getElementById("subscriptionLastName").value
                },
                user: user
            };

            console.log(JSON.stringify(body));
            xhttp.open("POST", `${Constants.serverBaseUrl}/user/register`, true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(JSON.stringify(body));
        }
        else
            console.log("pass check KO");
    }
    else
        form.submit();
}

function getLandlord() {
    if (document.getElementById("subscriptionAddress").checked) {
        return {
            address: `${document.getElementById("subscriptionAddress").value} ${document.getElementById("subscriptionZipCode").value} ${document.getElementById("subscriptionCity").value}`,
            company: "",
            firstName: document.getElementById("subscriptionOwnerName").value,
            lastName: document.getElementById("subscriptionOwnerLastName").value
        };
    }
    else {
        return {
            address: document.getElementById("subscriptionOwnerAddress").value,
            company: document.getElementById("subscriptionOwnerCompany").value,
            firstName: document.getElementById("subscriptionOwnerName").value,
            lastName: document.getElementById("subscriptionOwnerLastName").value
        };
    }

}
