// Import required JS
import './js/index';

// Import stylesheet
import './css/main.scss';

//import {Constants} from './js/constant.mjs';
import './js/services.mjs';

import {submitLogin} from './js/login.mjs';
window.submitLogin = submitLogin;

import {slideSubscriptionNext} from './js/inscription.mjs';
window.slideSubscriptionNext = slideSubscriptionNext;

import {slideSubscriptionPrevious} from './js/inscription.mjs';
window.slideSubscriptionPrevious = slideSubscriptionPrevious;

import {checkChangeToOwner} from './js/inscription.mjs';
window.checkChangeToOwner = checkChangeToOwner;
<<<<<<< HEAD

import {submitSubscriptionForm} from './js/inscription.mjs';
window.submitSubscriptionForm = submitSubscriptionForm;
=======
import {checkDisclaimer} from './js/inscription.mjs';
window.checkDisclaimer = checkDisclaimer;
>>>>>>> 20d82d20cdc529d6b68cd2bb5103609850a665bd
