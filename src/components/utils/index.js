import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { REACT_APP_EMAIL } from 'const/api'

export function AuthNeedHelp(props) {
  const { t } = useTranslation()
  return <a href={REACT_APP_EMAIL}>{t('auth.help')}</a>
}

export function AuthMember(props) {
  const { t } = useTranslation()
  return (
    <>
      {t('auth.link.member')} <Link to="/">{t('auth.link.click')}</Link>
    </>
  )
}

export function ForgotPassword(props) {
  const { t } = useTranslation()
  return <Link to="/auth/login/new-password">{t('login.forgotPassword')}</Link>
}

export function PreLoader(props) {
  return (
    <div className="auth-preloader">
      <p>{props.text}</p>
      <i className="preloader" />
    </div>
  )
}
