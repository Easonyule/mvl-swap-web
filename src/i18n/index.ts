import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export const initializeI18next = () => {
  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources: {
        en: {
          translation: {
            'hello world': 'Hello, World!',
          },
        },
        ko: {
          translation: {
            'hello world': '안녕, 세상아!',
          },
        },
      },
      lng: 'en',
      fallbackLng: 'en',

      interpolation: {
        escapeValue: false,
      },
    });
};
