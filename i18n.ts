import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEn from "@/locales/en/translation.json";
import translationEs from "@/locales/es/translation.json"

const resources = {
    "en": { translation: translationEn },
    "es": { translation: translationEs },
};

i18n
    .use(initReactI18next)
    .init({
        lng: 'en',
        fallbackLng: 'en',
        debug: true,
        resources,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
