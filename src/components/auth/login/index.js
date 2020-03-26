import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import AuthContent from '../content'
import AuthForm from '../form'
import { AuthNeedHelp, PreLoader } from '../utils'
import { isEmailValid, isPassword } from '../../../utils'

export default function AuthLogin(props) {
  const { t } = useTranslation()
  const [isLogging, setIsLogging] = useState(false)
  const [disable, setDisable] = useState(true)
  const [email, setImail] = useState(null)
  const [password, setPassword] = useState({ valid: null, value: null })

  const onLoging = () => {
    setIsLogging(true)
  }

  const isValid = () => {
    if (email && password.valid) {
      setDisable(false)
    } else {
      setDisable(true)
    }
  }

  return (
    <AuthContent>
      {!isLogging ? (
        <AuthForm onKeyUp={isValid}>
          <h2>{t('login.title')}</h2>
          <Form>
            <Form.Group onChange={(e) => isEmailValid(e, setImail)}>
              <Form.Control
                size="lg"
                type="email"
                placeholder={t('auth.model.email')}
              />
              {email === false && (
                <div className="error">{t('error.email')}</div>
              )}
            </Form.Group>
            <Form.Group onChange={(e) => isPassword(e, 6, setPassword)}>
              <Form.Control
                size="lg"
                type="password"
                placeholder={t('auth.model.password')}
              />
              {password.valid === false && (
                <div className="error">{t('error.password')} 6</div>
              )}
            </Form.Group>
            <Form.Group className={`${disable ? 'disabled' : ''}`}>
              <Button variant="primary" onClick={onLoging}>
                {t('login.title')}
              </Button>
            </Form.Group>
            <Form.Group className="text-sm">
              <AuthNeedHelp />
            </Form.Group>
          </Form>
        </AuthForm>
      ) : (
        <AuthForm>
          <PreLoader text={t('login.logging')} />
        </AuthForm>
      )}
    </AuthContent>
  )
}
