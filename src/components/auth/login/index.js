import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { logInAction } from 'actions/auth'
import { Form, Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import AuthContent from 'components/auth/content'
import AuthForm from 'components/auth/form'
import { AuthNeedHelp, PreLoader } from 'components/auth/utils'
import { isEmailValid, isPassword } from 'utils/validator'
import AuthRedirect from 'components/auth/redirect'

export default function AuthLogin(props) {
  const { t } = useTranslation()
  const [isLogging, setIsLogging] = useState(false)
  const [disable, setDisable] = useState(true)
  const [email, setImail] = useState(null)
  const [password, setPassword] = useState({ valid: null, value: null })
  const [redirect, setRedirect] = useState(false)

  const { user } = useSelector((state) => state.login)
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
    if (user && user.status > 399 && email) {
      setIsLogging(false)
      history.push('/auth/login/error')
    }
    if (user && user.token && user.role) {
      setIsLogging(false)
      setRedirect(true)
    }
  }, [user, email, history])

  const isValid = () => {
    if (email && password.valid) {
      setDisable(false)
    } else {
      setDisable(true)
    }
  }

  const onLogin = () => {
    setIsLogging(true)
    dispatch(
      logInAction.request({
        username: email.value,
        password: password.value,
      }),
    )
  }

  if (redirect) {
    return <AuthRedirect />
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
              <Button onClick={onLogin} variant="primary">
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
