import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

export default i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        auth: {
          title: 'we are so happy To have you here!',
          register: 'register',
          link: { member: 'Already a member?', click: 'Click here' },
          help: 'Need help?',
          error: 'Something went wrong…',
          tryAgain: 'try registering again',
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
        login: {
          title: 'log in',
          logging: 'logging in...',
          error: 'login failed',
          errorMessage: 'Wrong email or/and wrong password',
          tryAgain: 'try logging in again',
          forgotPassword: 'Forgot your password?',
          newPasswordTitle: 'create a new password',
          newPlaceholder: 'new password',
          confirmPassword: 'confirm password',
          changePassword: 'change password',
          resetPassword: 'reset password',
          email: 'email',
          userNotExists: 'There is no user with this email',
          createAccount: 'Creating account',
          congratulations: {
            title: 'congratulations!',
            message: 'Your password has now been reset!',
            button: 'countinue',
          },
          aprove: {
            title: 'Follow the link',
            message1: 'We have sent you an email. Check your email’s inbox.',
            message2: 'Can’t find it? Check your junk mail!',
            message3: 'Still can’t find it?',
            button: 'resend email',
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
