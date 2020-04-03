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
import AuthMain from 'components/auth/main'
import AuthLogin from 'components/auth/login'
import AuthLoginError from 'components/auth/login/error'
import AuthLoginNewPassword from 'components/auth/password/new-password'
import AuthLoginResetPassword from 'components/auth/password/reset-password'
import AuthLoginCongratulations from 'components/auth/password/congratulations'
import AuthLoginConfirmEmail from 'components/auth/login/confirm-email'
import AuthRedirect from 'components/auth/redirect'
import AuthCompany from 'components/auth/company'
import AuthModel from 'components/auth/model'
import AuthError from 'components/auth/form/error'
import Dashboard from 'components/dashboard'

const routes = [
  { path: '/auth/login/error', Component: AuthLoginError },
  { path: '/auth/login/new-password', Component: AuthLoginNewPassword },
  { path: '/auth/login/reset-password', Component: AuthLoginResetPassword },
  { path: '/auth/login/congratulations', Component: AuthLoginCongratulations },
  { path: '/auth/confirm/email', Component: AuthLoginConfirmEmail },
  { path: '/onboarding/confirm/:id', Component: AuthRedirect },
  { path: '/auth/login', Component: AuthLogin },
  { path: '/auth/model', Component: AuthModel },
  { path: '/auth/company', Component: AuthCompany },
  { path: '/auth/error', Component: AuthError },
  { path: '/ui', Component: UIKit },
]

const authRoutes = [
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
          <AuthMain />
        </Route>

        {routes.map(({ path, Component }) => (
          <Route path={path} key={path}>
            <Component />
          </Route>
        ))}

        {authRoutes.map(({ path, Component }) => (
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
