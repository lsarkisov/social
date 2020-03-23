import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { REACT_APP_FACEBOOK_APP_ID } from '../../../const/api'
import { logInAction } from '../../../actions/auth'
import SocialButton from './button'

export default function AuthSocial(props) {
  const [success, setSuccess] = useState(false)
  const dispatch = useDispatch()
  const { t } = useTranslation()

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
      <p>{t('Or register with')}</p>
      <SocialButton
        provider="facebook"
        appId={REACT_APP_FACEBOOK_APP_ID}
        onLoginSuccess={handleSocialLogin}
        onLoginFailure={handleSocialLoginFailure}
      />
    </div>
  )
}
