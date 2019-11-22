// Import required JS
import './js/index';

// Import stylesheet
import './css/main.scss';

//import {Constants} from './js/constant.mjs';
import {callRest} from './js/services.mjs';
window.callRest = callRest;

import {submitLogin} from './js/login.mjs';
window.submitLogin = submitLogin;

//#region Inscription
import {slideSubscriptionNext} from './js/inscription.mjs';
window.slideSubscriptionNext = slideSubscriptionNext;

import {slideSubscriptionPrevious} from './js/inscription.mjs';
window.slideSubscriptionPrevious = slideSubscriptionPrevious;

import {checkChangeToOwner} from './js/inscription.mjs';
window.checkChangeToOwner = checkChangeToOwner;

import {submitSubscriptionForm} from './js/inscription.mjs';
window.submitSubscriptionForm = submitSubscriptionForm;

import {checkDisclaimer} from './js/inscription.mjs';
window.checkDisclaimer = checkDisclaimer;
//#endregion

//#region Documents
import {generateSVG} from './js/consomation.mjs';
window.generateSVG = generateSVG;
//#endregion

//#region Admin Consultation
import {CallGetConsultationData} from './js/admin.consultation.mjs';
window.CallGetConsultationData = CallGetConsultationData;
//#endregion

//#region Admin Consultation
import {callHousingList} from './js/import.mjs';
window.callHousingList = callHousingList;
//#endregion

//#region User Documents
import {callUserDocumentsList} from './js/documents.mjs';
window.callUserDocumentsList = callUserDocumentsList;
//#endregion
