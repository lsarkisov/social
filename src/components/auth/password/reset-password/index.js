import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { resetPasswordAction } from 'actions/auth'
import { Form, Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import AuthContent from 'components/auth/content'
import AuthForm from 'components/auth/form'
import { PreLoader } from 'components/auth/utils'
import { isEmailValid } from 'utils/validator'
import { ENTITY_NOT_FOUND } from 'const/requests'

export default function AuthLoginResetPassword(props) {
  const { t } = useTranslation()
  const [userExists, setUserExists] = useState(true)
  const [resetPassword, setResetPassword] = useState(false)
  const [disable, setDisable] = useState(true)
  const [username, setUsername] = useState({ valid: null, value: null })

  const { user } = useSelector((state) => state.password)
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    if (user && user.serviceErrorGroup === ENTITY_NOT_FOUND && username.valid) {
      dispatch(resetPasswordAction.failure())
      history.push('/auth/login/error', { text: t('login.userNotExists') })
    }

    if (user && Object.keys(user).length === 0) {
      history.push('/auth/confirm/email')
    }
  }, [user, history, username.valid, dispatch, t])

  const isValid = () => {
    if (username.valid) {
      setDisable(false)
    } else {
      setDisable(true)
    }
  }

  const onReset = () => {
    setResetPassword(true)
    dispatch(
      resetPasswordAction.request({
        username: username.value,
      }),
    )
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
            <Form.Group onChange={(e) => isEmailValid(e, setUsername)}>
              <Form.Control
                size="lg"
                type="email"
                placeholder={t('login.email')}
              />
              {username.valid === false && (
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
