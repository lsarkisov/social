import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import AuthContent from '../content'
import AuthForm from '../form'
import { PreLoader } from '../utils'
import { isEmailValid } from '../../../utils'

export default function AuthLoginResetPassword(props) {
  const { t } = useTranslation()
  const [userExists, setUserExists] = useState(true)
  const [resetPassword, setresetPassword] = useState(false)
  const [disable, setDisable] = useState(true)
  const [email, setImail] = useState(null)

  const onReset = () => {
    setresetPassword(true)

    setTimeout(() => {
      setUserExists(false)
      setresetPassword(false)
    }, 1500)
  }

  const isValid = () => {
    if (email) {
      setDisable(false)
    } else {
      setDisable(true)
    }
  }

  return (
    <AuthContent>
      {!resetPassword ? (
        <AuthForm>
          <h2>{t('login.resetPassword')}</h2>
          {!userExists && (
            <p className="auth-login__subtitle">{t('login.userNotExists')}</p>
          )}
          <Form onKeyUp={isValid}>
            <Form.Group onChange={(e) => isEmailValid(e, setImail)}>
              <Form.Control
                size="lg"
                type="email"
                placeholder={t('login.email')}
              />
              {email === false && (
                <div className="error">{t('error.email')}</div>
              )}
            </Form.Group>
            <Form.Group className={`${disable ? 'disabled' : ''}`}>
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
