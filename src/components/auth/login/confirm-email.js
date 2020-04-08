import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import AuthContent from 'components/auth/content'
import AuthForm from 'components/auth/form'

export default function AuthLoginConfirmEmail(props) {
  const { t } = useTranslation()

  return (
    <AuthContent>
      <AuthForm>
        <h2 className="title-lg">{t('login.confirm.title')}</h2>
        <p className="auth-login__subtitle-extra">
          {t('login.confirm.message1')}
        </p>
        <p className="auth-login__subtitle-extra">
          {t('login.confirm.message2')}
        </p>
        <p className="auth-login__subtitle-extra">
          {t('login.confirm.message3')}
        </p>
        <Form>
          <Form.Group className="auth-login__congrat-button">
            <Button variant="primary">{t('login.confirm.button')} </Button>
          </Form.Group>
        </Form>
      </AuthForm>
    </AuthContent>
  )
}