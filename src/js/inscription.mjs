import { Constants } from './constant.mjs';

export function slideSubscriptionNext(num) {
    changeClass('creation_' + num, 'divGauche');
    changeClass('creation_' + (num + 1), 'divMilieu');
}

export function slideSubscriptionPrevious(num) {
    changeClass('creation_' + num, 'divDroite');
    changeClass('creation_' + (num - 1), 'divMilieu');
}

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
    let formUser = document.getElementById("subscriptionFormUser");
    let formHousing = document.getElementById("subscriptionFormHousing");
    let formLandloard = document.getElementById("subscriptionFormLandlord");

    let formUserValidity = formUser.checkValidity();
    let formHousingValidity = formHousing.checkValidity();
    let formLandloardValidity = formLandloard.checkValidity();
    let isOwner = document.getElementById("subscriptionIsOwner").checked;

    if (formUserValidity && formHousingValidity && document.getElementById("acceptDisclaimer").checked && (isOwner || !isOwner && formLandloardValidity)) {
        let pass = document.getElementById("subscriptionPass").value;
        let passConfirm = document.getElementById("subscriptionPassConfirm").value;

        if (pass === passConfirm) {
            let home = {
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

            let body = {
                home: home,
                landlord: getLandlord(),
                tenant: {
                    firstName: document.getElementById("subscriptionFirstName").value,
                    lastName: document.getElementById("subscriptionLastName").value
                },
                user: {
                    username: document.getElementById("subscriptionEmail").value,
                    password: pass,
                    passwordConfirm: passConfirm
                }
            };

            //console.log(JSON.stringify(body));
            var response = callRest('user/register', 'POST', JSON.stringify(body));

            if(response.status != 200 || response.status != 202){
//TODO
            }

            /* var xhttp = new XMLHttpRequest();
            xhttp.open("POST", `${Constants.serverBaseUrl}/user/register`, true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(JSON.stringify(body)); */
        }
        else
            console.log("pass check KO");
    }
    else if (!formUserValidity) {
        console.log("formUserValidity KO");
        slideSubscriptionPrevious(1);
    }
    else if (!formHousingValidity) {
        console.log("formHousingValidity KO");
        slideSubscriptionPrevious(2);
    }
    else if (!isOwner && formLandloardValidity) {
        console.log("formLandloardValidity KO");
        slideSubscriptionPrevious(3);
    }
    else if (!document.getElementById("acceptDisclaimer").checked) {
        //TODO: display message to user
        console.log("Accept");
    }
    else {
        //TODO: display message to user
        console.log("HO OH");
    }
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
