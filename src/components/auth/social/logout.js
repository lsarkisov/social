import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import sdk from 'react-social-login/src/sdk'
import { logInAction } from '../../../actions/auth'
import { Link } from 'react-router-dom'

export default function AuthSocialLogout() {
  const { user, data } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('USER', user, data)
  }, [user, data])

  function logOut() {
    sdk[user.provider].logout()
    dispatch(logInAction.failure({ user: null }))
  }

  return (
    <div>
      <Link to="/auth/model">Auth</Link>
      <button onClick={logOut}>logout</button>
    </div>
  )
}
