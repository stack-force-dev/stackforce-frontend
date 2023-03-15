import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';

import { initReactI18next } from 'react-i18next';

i18n
  .use(
    resourcesToBackend((language, namespace, callback) => {
      import(`./locales/${language}/${namespace}.json`)
        .then((resources) => {
          callback(null, resources);
        })
        .catch((error) => {
          callback(error, null);
        });
    })
  )
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    lng: 'ru',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
      wait: false,
    },
  });

export default i18n;
