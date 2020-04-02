import React from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { ForgotPassword, AuthNeedHelp } from 'components/auth/utils'
import AuthContent from 'components/auth/content'
import AuthForm from 'components/auth/form'

export default function AuthLoginError(props) {
  const { t } = useTranslation()
  const history = useHistory()

  const goBack = () => history.goBack()

  return (
    <AuthContent>
      <AuthForm>
        <h2>{t('login.error')}</h2>
        <p className="auth-login__subtitle">{t('login.errorMessage')}</p>
        <Form>
          <Form.Group>
            <Button onClick={goBack} variant="primary">
              {t('login.tryAgain')}
            </Button>
          </Form.Group>
          <Form.Group className="text-sm">
            <ForgotPassword />
          </Form.Group>
          <Form.Group className="text-sm">
            <AuthNeedHelp />
          </Form.Group>
        </Form>
      </AuthForm>
    </AuthContent>
  )
}
