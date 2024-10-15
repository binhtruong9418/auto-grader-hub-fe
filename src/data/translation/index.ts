import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import translationVI from './resources/vi.json';
import translationEn from './resources/en.json';


// add more languages here
const resources = {
    vi: {
        translation: translationVI
    },
    en: {
        translation: translationEn
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;