import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

export default i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        auth: {
          title: 'we are so happy To have you here!',
          register: 'register',
          link: { question: 'Already a member?', click: 'Click here' },
          help: 'Need help?',
          org: {
            companyName: 'company name',
            orgNumber: 'organisation number',
            website: 'website',
            email: 'email',
            password: 'password',
            confirmPassword: 'confirm password',
          },
          model: {
            name: 'first and last name ',
            email: 'email',
            password: 'password',
            confirmPassword: 'confirm password',
            orSocial: 'or register with',
          },
        },
      },
    },
  },
  lng: 'en',
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,
  },
})
