import { OpaqueToken } from '@angular/core';

// import translations
import { LANG_EN_NAME, LANG_EN_TRANS } from './lang-en';
import { LANG_UA_NAME, LANG_UA_TRANS } from './lang-ua';

// translation token
export const TRANSLATIONS = new OpaqueToken('translations');

// all translations
const dictionary = {
    [LANG_EN_NAME]: LANG_EN_TRANS,
    [LANG_UA_NAME]: LANG_UA_TRANS,
};

// providers
export const TRANSLATION_PROVIDERS = [
    { provide: TRANSLATIONS, useValue: dictionary },
];