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
