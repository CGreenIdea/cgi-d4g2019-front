// Import required JS
import './js/index';

// Import stylesheet
import './css/main.scss';

import {Constants} from './js/constant.mjs';
import './js/services.mjs';

import {submitLogin} from './js/login.mjs';
window.submitLogin = submitLogin;

import {slideSubscriptionNext} from './js/inscription.mjs';
window.slideSubscriptionNext = slideSubscriptionNext;
import {slideSubscriptionPrevious} from './js/inscription.mjs';
window.slideSubscriptionPrevious = slideSubscriptionPrevious;
import {checkChangeToOwner} from './js/inscription.mjs';
window.checkChangeToOwner = checkChangeToOwner;
