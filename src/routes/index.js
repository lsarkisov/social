import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  withRouter,
} from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition'
import NoMatch from 'components/no-match'
import UIKit from 'components/ui'
import OnboardingMain from 'components/main'
import OnboardingLogin from 'components/onboarding/login'
import OnboardingLoginError from 'components/onboarding/login/error'
import OnboardingLoginNewPassword from 'components/onboarding/password/new-password'
import OnboardingLoginResetPassword from 'components/onboarding/password/reset-password'
import OnboardingLoginCongratulations from 'components/onboarding/password/congratulations'
import OnboardingLoginConfirmEmail from 'components/onboarding/login/confirm-email'
import OnboardingRedirect from 'components/onboarding/redirect'
import OnboardingCompany from 'components/onboarding/company'
import OnboardingModel from 'components/onboarding/model'
import OnboardingError from 'components/onboarding/form/error'
import Faq from 'components/faq'
import Contacts from 'components/contacts'
import Terms from 'components/terms'
import Privacy from 'components/privacy'
import Policy from 'components/policy'
import Company from 'components/company'
import Dashboard from 'components/dashboard'

const routes = [
  { path: '/onboarding/login/error', Component: OnboardingLoginError },
  {
    path: '/onboarding/login/reset-password',
    Component: OnboardingLoginResetPassword,
  },
  { path: '/user/password/change/:id', Component: OnboardingLoginNewPassword },
  {
    path: '/onboarding/login/congratulations',
    Component: OnboardingLoginCongratulations,
  },
  { path: '/onboarding/confirm/email', Component: OnboardingLoginConfirmEmail },
  { path: '/onboarding/confirm/:id', Component: OnboardingRedirect },
  { path: '/onboarding/login', Component: OnboardingLogin },
  { path: '/onboarding/model', Component: OnboardingModel },
  { path: '/onboarding/company', Component: OnboardingCompany },
  { path: '/onboarding/error', Component: OnboardingError },
  { path: '/ui', Component: UIKit },
  { path: '/faq', Component: Faq },
  { path: '/terms', Component: Terms },
  { path: '/privacy', Component: Privacy },
  { path: '/policy', Component: Policy },
  { path: '/company', Component: Company },
  { path: '/contacts', Component: Contacts },
]

const privateRoutes = [
  { path: '/dashboard/model', Component: Dashboard },
  { path: '/dashboard/company', Component: Dashboard },
]

function Routes() {
  function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          localStorage.getItem('token') && localStorage.getItem('role') ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/',
                state: { from: location },
              }}
            />
          )
        }
      />
    )
  }

  return (
    <Router>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="switch-wrapper"
      >
        <Route exact path="/">
          <OnboardingMain />
        </Route>

        {routes.map(({ path, Component }) => (
          <Route path={path} key={path}>
            <Component />
          </Route>
        ))}

        {privateRoutes.map(({ path, Component }) => (
          <PrivateRoute path={path} key={path}>
            <Component />
          </PrivateRoute>
        ))}

        <Route>
          <NoMatch />
        </Route>
      </AnimatedSwitch>
    </Router>
  )
}

export default withRouter(Routes)
