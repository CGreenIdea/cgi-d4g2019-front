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
    let formLandlord = document.getElementById("subscriptionFormLandlord");

    let formUserValidity = formUser.checkValidity();
    let formHousingValidity = formHousing.checkValidity();
    let formLandlordValidity = formLandlord.checkValidity();
    let isOwner = document.getElementById("subscriptionIsOwner").checked;
    hideSubscriptionError();

    if (formUserValidity && formHousingValidity && document.getElementById("acceptDisclaimer").checked && (isOwner || !isOwner && formLandlordValidity)) {
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

            var response = callRest('user/register', 'POST', JSON.stringify(body));

            if (response.status != 200 || response.status != 202) {
                displaySubscriptionError(response.content);
            }
            else {
                //TODO: redirect
            }
        }
        else
            console.log("pass check KO");
    }
    else if (!formUserValidity) {
        slideSubscriptionPrevious(2);
        changeClass('creation_4', 'divDroite');
        displaySubscriptionError("User personal form is not valid");
    }
    else if (!formHousingValidity) {
        slideSubscriptionPrevious(3);
        changeClass('creation_4', 'divDroite');
        displaySubscriptionError("Housing form is not valid");
    }
    else if (!isOwner && formLandlordValidity) {
        slideSubscriptionPrevious(4);
        changeClass('creation_4', 'divDroite');
        displaySubscriptionError("Landlord form is not valid");
    }
    else if (!document.getElementById("acceptDisclaimer").checked) {
        displaySubscriptionError("Please accept the conditions");
    }
    else {
        //TODO: display message to user
        console.log("HO OH");
        displaySubscriptionError("An error that shouldn't happen, happened. Please contact the helpdesk.");
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

function displaySubscriptionError(message) {
    document.getElementById("subscriptionErrorDisplay").style.display = "block";
    document.getElementById("subscriptionErrorDisplay").innerHTML = message;
}

function hideSubscriptionError() {
    document.getElementById("subscriptionErrorDisplay").style.display = "none";
    document.getElementById("subscriptionErrorDisplay").innerHTML = "";
}
