export function slideSubscriptionNext(num, fromDiv, toDiv) {
    changeClass('creation_' + num, fromDiv);
    changeClass('creation_' + (num + 1), toDiv);
}
//"divGauche"
// "divMilieu"
export function slideSubscriptionPrevious(num, fromDiv, toDiv) {
    changeClass('creation_' + num, fromDiv);
    changeClass('creation_' + (num - 1), toDiv);
}
//"divDroite"
//"divMilieu"
export function checkChangeToOwner(num, fromDiv, toDiv) {
    var ownershipVal = document.getElementById("subscriptionIsOwner").checked;
    if (ownershipVal == true) {
        changeClass('creation_' + num, fromDiv);
        changeClass('creation_' + (num - 1), toDiv);
    }
    else
        slideSubscriptionNext(num, fromDiv, toDiv);
}

function changeClass(id, cl) {
    document.getElementById(id).className = cl;
}
