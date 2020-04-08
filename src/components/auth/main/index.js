import React, { useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import AuthMainPattern from 'components/auth/main/pattern'
import StickyNav from 'components/sticky-nav'
import AuthContent from 'components/auth/content'
import AuthForm from 'components/auth/form'
import { ForgotPassword, AuthNeedHelp } from 'components/auth/utils'

export default function AuthMain(props) {
  const { t } = useTranslation()

  return (
    <>
      <AuthMainPattern />
      <StickyNav>
        <Link to="/auth/model">
          <Button variant="primary">{t('auth.registerModel')}</Button>
        </Link>
        <Link to="/auth/company">
          <Button variant="primary">{t('auth.registerCompany')}</Button>
        </Link>
        <Link to="/auth/login">
          <Button variant="primary">{t('login.title')}</Button>
        </Link>
      </StickyNav>
      <AuthContent className="main-page">
        <AuthForm>
          <h2>
            Iconic<span className="sub-text">li</span>
          </h2>
          <p className="main-page__slogan">
            {t('auth.slogan.first')}
            <span className="sub-text"> {t('auth.slogan.second')}</span>
          </p>
          <Form>
            <Form.Group>
              <Link to="/auth/login">
                <Button variant="primary">{t('login.title')}</Button>
              </Link>
            </Form.Group>
            <Form.Group className="text-sm main-page__forgot-password">
              <ForgotPassword />
            </Form.Group>
            <Form.Group>
              <Link to="/auth/model">
                <Button variant="primary">{t('auth.registerModel')}</Button>
              </Link>
            </Form.Group>
            <Form.Group>
              <Link to="/auth/company">
                <Button variant="primary">{t('auth.registerCompany')}</Button>
              </Link>
            </Form.Group>
            <Form.Group className="text-sm">
              <AuthNeedHelp />
            </Form.Group>
          </Form>
        </AuthForm>
      </AuthContent>
      <div className="main-page__content">
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
      </div>
    </>
  )
}
