// Import required JS
import './js/index';

// Import stylesheet
import './css/main.scss';

import { callRest } from './js/services.mjs';
window.callRest = callRest;

import { submitLogin } from './js/login.mjs';
window.submitLogin = submitLogin;

import { correctFormActionUrl } from './js/login.mjs';
window.correctFormActionUrl = correctFormActionUrl;

//#region Inscription
import { slideSubscriptionNext } from './js/inscription.mjs';
window.slideSubscriptionNext = slideSubscriptionNext;

import { slideSubscriptionPrevious } from './js/inscription.mjs';
window.slideSubscriptionPrevious = slideSubscriptionPrevious;

import { checkChangeToOwner } from './js/inscription.mjs';
window.checkChangeToOwner = checkChangeToOwner;

import { submitSubscriptionForm } from './js/inscription.mjs';
window.submitSubscriptionForm = submitSubscriptionForm;

import { checkDisclaimer } from './js/inscription.mjs';
window.checkDisclaimer = checkDisclaimer;
//#endregion

//#region Consommation
import { generateSVG } from './js/consommation.mjs';
window.generateSVG = generateSVG;
import { rangeConso } from './js/consommation.mjs';
window.rangeConso = rangeConso;
import {callCompare} from './js/compare.mjs';
window.callCompare = callCompare;
//#endregion

//#region User / Menu
import { checkUser } from './js/login.mjs';
window.checkUser = checkUser;
import { logout } from './js/login.mjs';
window.logout = logout;
//#endregion

//#region Admin Consultation
import { callGetConsultationData } from './js/admin.consultation.mjs';
window.callGetConsultationData = callGetConsultationData;
//#endregion

//#region Admin Consultation
import { callHousingList } from './js/import.mjs';
window.callHousingList = callHousingList;
//#endregion

//#region User Documents
import { callUserDocumentsList } from './js/documents.mjs';
window.callUserDocumentsList = callUserDocumentsList;
//#endregion

