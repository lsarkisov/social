import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

export default i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        'Or register with': 'or register with',
      },
    },
  },
  lng: 'en',
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,
  },
})
