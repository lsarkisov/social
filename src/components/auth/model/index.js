import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { PreLoader } from 'components/utils'
import { authCommonAction } from 'actions/auth'
import AuthContent from 'components/auth/content'
import AuthForm from 'components/auth/form'
import { AuthMember, AuthNeedHelp } from 'components/auth/utils'
import { isAlpha, isEmailValid, isPassword, isConfirm } from 'utils/validator'
import { ROLE_MODEL_USER, ENTITY_ALREADY_EXISTS } from 'const/requests'
// import AuthSocial from 'components/auth/social'

export default function AuthModel(props) {
  const { t } = useTranslation()
  const [disable, setDisable] = useState(true)
  const [isPreloader, setIsPreloader] = useState(false)
  const [isUserExists, setIsUserExists] = useState(false)
  const [firstName, setFirstName] = useState({ valid: null, value: null })
  const [email, setImail] = useState({ valid: null, value: null })
  const [password, setPassword] = useState({ valid: null, value: null })
  const [confirm, setConfirm] = useState({ value: null })

  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    // on success
    if (user && user.token && user.role && !disable) {
      setIsPreloader(false)
      setDisable(true)
      history.push('/auth/confirm/email')
    }

    // if user with this email was registered
    if (
      user &&
      user.serviceErrorGroup &&
      user.serviceErrorGroup === ENTITY_ALREADY_EXISTS
    ) {
      setIsPreloader(false)
      setIsUserExists(true)
      setDisable(true)
    }
  }, [user, history, disable])

  const isValid = () => {
    if (
      firstName.valid &&
      email.valid &&
      password.valid &&
      password.value === confirm.value
    ) {
      setDisable(false)
    } else {
      setDisable(true)
    }
  }

  const onAuth = () => {
    setIsPreloader(true)
    dispatch(
      authCommonAction.request({
        email: email.value,
        password: password.value,
        firstName: firstName.value,
        authority: ROLE_MODEL_USER,
      }),
    )
  }

  return (
    <AuthContent>
      <AuthForm>
        {!isPreloader ? (
          <>
            <h2>{t('auth.title')}</h2>
            <Form onKeyUp={isValid}>
              <Form.Group onChange={(e) => isAlpha(e, 3, setFirstName)}>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder={t('auth.model.name')}
                />
                {firstName.valid === false && (
                  <div className="error">{t('error.len')} 3</div>
                )}
              </Form.Group>
              <Form.Group onChange={(e) => isEmailValid(e, setImail)}>
                <Form.Control
                  size="lg"
                  type="email"
                  placeholder={t('auth.model.email')}
                />
                {email.valid === false && (
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
              <Form.Group onChange={(e) => isConfirm(e, setConfirm)}>
                <Form.Control
                  size="lg"
                  type="password"
                  placeholder={t('auth.model.confirmPassword')}
                />
                {confirm.value && confirm.value !== password.value && (
                  <div className="error">{t('error.confirm')}</div>
                )}
              </Form.Group>
              {isUserExists && (
                <p className="center error">{t('auth.userExists')}</p>
              )}
              <Form.Group className={`${disable ? 'disabled' : ''}`}>
                <Button onClick={onAuth} variant="primary">
                  {t('auth.register')}
                </Button>
              </Form.Group>
              <Form.Group className="text-sm">
                <AuthMember />
              </Form.Group>
              <Form.Group className="text-sm">
                <AuthNeedHelp />
              </Form.Group>
              {/* <Form.Group className="text-sm">
            {t('auth.model.orSocial')} <AuthSocial />
          </Form.Group> */}
            </Form>
          </>
        ) : (
          <PreLoader text={t('auth.registerModel')} />
        )}
      </AuthForm>
    </AuthContent>
  )
}
