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
import OnboardingNewPassword from 'components/onboarding/password/new-password'
import OnboardingResetPassword from 'components/onboarding/password/reset-password'
import OnboardingConfirmEmail from 'components/onboarding/confirm-email'
import OnboardingCongratulation from 'components/onboarding/congratulation'
import OnboardingRedirect from 'components/onboarding/redirect'
import OnboardingCompany from 'components/onboarding/auth/company'
import OnboardingModel from 'components/onboarding/auth/model'
import OnboardingError from 'components/onboarding/form/error'
import Faq from 'components/faq'
import Contacts from 'components/contacts'
import Terms from 'components/terms'
import Privacy from 'components/privacy'
import Policy from 'components/policy'
import Company from 'components/company'
import Dashboard from 'components/dashboard'

const routes = [
  { path: '/ui', Component: UIKit },
  { path: '/faq', Component: Faq },
  { path: '/terms', Component: Terms },
  { path: '/privacy', Component: Privacy },
  { path: '/policy', Component: Policy },
  { path: '/company', Component: Company },
  { path: '/contacts', Component: Contacts },
  { path: '/onboarding/model', Component: OnboardingModel },
  { path: '/onboarding/company', Component: OnboardingCompany },
  { path: '/onboarding/login/error', Component: OnboardingLoginError },
  { path: '/onboarding/login', Component: OnboardingLogin },
  { path: '/user/password/change/:id', Component: OnboardingNewPassword },
  { path: '/onboarding/confirm/email', Component: OnboardingConfirmEmail },
  { path: '/onboarding/congratulation', Component: OnboardingCongratulation },
  { path: '/onboarding/confirm/:id', Component: OnboardingRedirect },
  { path: '/onboarding/error', Component: OnboardingError },
  {
    path: '/onboarding/login/reset-password',
    Component: OnboardingResetPassword,
  },
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
