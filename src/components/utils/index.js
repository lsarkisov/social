import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { REACT_APP_EMAIL } from 'const/api'
import ReactScroll from 'react-scroll'

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
    <div className="custom-preloader">
      <p>{props.text}</p>
      <i className="preloader" />
    </div>
  )
}

export function ScrollTo(props) {
  const { to, offset } = props
  return (
    <ReactScroll.Link
      activeClass="active"
      to={to}
      spy={true}
      smooth={true}
      duration={500}
      className="bounceOutLeft"
      offset={offset || -65}
    >
      {props.children}
    </ReactScroll.Link>
  )
}
