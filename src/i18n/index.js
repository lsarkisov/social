import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import {
  onboarding,
  login,
  footer,
  congratulation,
  confirmEamil,
} from './onboarding.en'
import { error } from './form-validation.en'
import { dashboard } from './dashboard.en'

export default i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        onboarding,
        congratulation,
        confirmEamil,
        login,
        footer,
        error,
        dashboard,
      },
    },
  },
  lng: 'en',
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,
  },
})
