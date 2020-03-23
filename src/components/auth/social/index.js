import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import {
  REACT_APP_FACEBOOK_APP_ID,
  REACT_APP_INSTAGRAM_CLIENT_ID,
} from '../../../const/api'
import { logInAction } from '../../../actions/auth'
import SocialButton from './button'

export default function AuthSocial(props) {
  const [success, setSuccess] = useState(false)
  const dispatch = useDispatch()

  const handleSocialLogin = (user) => {
    dispatch(logInAction.success({ user }))
    setSuccess(true)
  }

  const handleSocialLoginFailure = (err) => {
    console.error('LOGIN ERROR', err)
  }

  if (success) {
    return <Redirect push to="/model/dashboard" />
  }

  return (
    <div>
      <h1>LOGIN</h1>
      <Link to="/model/dashboard">Dashboard</Link>
      <SocialButton
        provider="facebook"
        appId={REACT_APP_FACEBOOK_APP_ID}
        onLoginSuccess={handleSocialLogin}
        onLoginFailure={handleSocialLoginFailure}
      />
      <SocialButton
        provider="instagram"
        appId={REACT_APP_INSTAGRAM_CLIENT_ID}
        onLoginSuccess={handleSocialLogin}
        onLoginFailure={handleSocialLoginFailure}
      />
    </div>
  )
}
