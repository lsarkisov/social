import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import AuthContent from '../content'
import AuthForm from '../form'
import { PreLoader } from '../utils'

export default function AuthLoginResetPassword(props) {
  const [userExists, setUserExists] = useState(true)
  const [resetPassword, setresetPassword] = useState(false)
  const { t } = useTranslation()

  const onReset = () => {
    setresetPassword(true)

    setTimeout(() => {
      setUserExists(false)
      setresetPassword(false)
    }, 1500)
  }

  return (
    <AuthContent>
      {!resetPassword ? (
        <AuthForm>
          <h2>{t('login.resetPassword')}</h2>
          {!userExists && (
            <p className="auth-login__subtitle">{t('login.userNotExists')}</p>
          )}
          <Form>
            <Form.Group>
              <Form.Control
                size="lg"
                type="email"
                placeholder={t('login.email')}
              />
            </Form.Group>
            <Form.Group>
              <Button onClick={onReset} variant="primary">
                {t('login.resetPassword')}
              </Button>
            </Form.Group>
          </Form>
        </AuthForm>
      ) : (
        <AuthForm>
          <PreLoader text={t('login.createAccount')} />
        </AuthForm>
      )}
    </AuthContent>
  )
}
