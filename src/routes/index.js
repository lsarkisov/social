import React from 'react'
import { useSelector } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  withRouter,
} from 'react-router-dom'
import NoMatch from 'components/no-match'
import UIKit from 'components/ui'
import AuthMain from 'components/auth/main'
import AuthLogin from 'components/auth/login'
import AuthLoginError from 'components/auth/login/error'
import AuthLoginNewPassword from 'components/auth/login/new-password'
import AuthLoginResetPassword from 'components/auth/login/reset-password'
import AuthLoginCongratulations from 'components/auth/login/congratulations'
import AuthLoginAproveEmail from 'components/auth/login/aprove-email'
import AuthCompany from 'components/auth/company'
import AuthModel from 'components/auth/model'
import AuthError from 'components/auth/form/error'
import Dashboard from 'components/dashboard'

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
      <Switch>
        <Route exact path="/">
          <AuthMain />
        </Route>
        <Route path="/auth/login/error">
          <AuthLoginError />
        </Route>
        <Route path="/auth/login/new-password">
          <AuthLoginNewPassword />
        </Route>
        <Route path="/auth/login/reset-password">
          <AuthLoginResetPassword />
        </Route>
        <Route path="/auth/login/congratulations">
          <AuthLoginCongratulations />
        </Route>
        <Route path="/auth/login/aprove-email">
          <AuthLoginAproveEmail />
        </Route>
        <Route path="/auth/login">
          <AuthLogin />
        </Route>
        <Route path="/auth/model">
          <AuthModel />
        </Route>
        <Route path="/auth/company">
          <AuthCompany />
        </Route>
        <Route path="/auth/error">
          <AuthError />
        </Route>
        <Route path="/ui">
          <UIKit />
        </Route>
        <PrivateRoute path="/model/dashboard">
          <Dashboard />
        </PrivateRoute>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  )
}

export default withRouter(Routes)
