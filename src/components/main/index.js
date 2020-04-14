import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Logo from 'components/logo'
import AuthMainPattern from 'components/main/pattern'
import StickyNav from 'components/sticky-nav'
import AuthContent from 'components/auth/content'
import AuthMainContent from 'components/main/content'
import AuthForm from 'components/auth/form'
import AuthMainFooter from 'components/main/footer'
import { ForgotPassword, AuthNeedHelp } from 'components/auth/utils'
import ScrollTop from 'components/scroll-top'

export default function AuthMain(props) {
  const { t } = useTranslation()

  return (
    <>
      <ScrollTop />
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
          <Logo />
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
      <AuthMainContent />
      <AuthMainFooter />
    </>
  )
}
