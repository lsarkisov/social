import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import AuthContent from '../content'
import AuthForm from '../form'
import { ForgotPassword, AuthNeedHelp } from '../utils'

export default function AuthMain(props) {
  const { t } = useTranslation()

  return (
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
  )
}
