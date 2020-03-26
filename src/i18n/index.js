import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { auth, login } from './authorization.en'
import { error } from './form-validation.en'

export default i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        auth,
        login,
        error,
      },
    },
  },
  lng: 'en',
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,
  },
})
