import React from 'react'
import { useSelector } from 'react-redux'
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
import AuthLoginCongratulations from 'components/auth/login/congratulations'
import AuthLoginAproveEmail from 'components/auth/login/aprove-email'
import AuthCompany from 'components/auth/company'
import AuthModel from 'components/auth/model'
import AuthError from 'components/auth/form/error'
import Dashboard from 'components/dashboard'

const routes = [
  { path: '/auth/login/error', Component: AuthLoginError },
  { path: '/auth/login/new-password', Component: AuthLoginNewPassword },
  { path: '/auth/login/reset-password', Component: AuthLoginResetPassword },
  { path: '/auth/login/congratulations', Component: AuthLoginCongratulations },
  { path: '/auth/login/aprove-email', Component: AuthLoginAproveEmail },
  { path: '/auth/login', Component: AuthLogin },
  { path: '/auth/model', Component: AuthModel },
  { path: '/auth/company', Component: AuthCompany },
  { path: '/auth/error', Component: AuthError },
  { path: '/ui', Component: UIKit },
]

const authRoutes = [{ path: '/dashboard', Component: Dashboard }]

function Routes() {
  const { authorised } = useSelector((state) => state.auth)

  function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          authorised ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/auth/model',
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
