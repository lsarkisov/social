import React from 'react'
import { useSelector } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  withRouter,
} from 'react-router-dom'
import NoMatch from '../components/no-match'
import UIKit from '../components/ui'
import AuthCompany from '../components/auth/company'
import AuthModel from '../components/auth/model'
import Dashboard from '../components/dashboard'

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
        <Route path="/auth/model">
          <AuthModel />
        </Route>
        <Route path="/auth/company">
          <AuthCompany />
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
