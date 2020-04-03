import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { PreLoader } from 'components/utils'
import { authCommonAction } from 'actions/auth'
import AuthContent from 'components/auth/content'
import AuthForm from 'components/auth/form'
import { AuthMember, AuthNeedHelp } from 'components/auth/utils'
import {
  lt,
  isDigit,
  isWebsiteValid,
  isEmailValid,
  isPassword,
  isConfirm,
} from 'utils/validator'
import { ROLE_COMPANY_USER, ENTITY_ALREADY_EXISTS } from 'const/requests'

export default function AuthModel(props) {
  const { t } = useTranslation()
  const [disable, setDisable] = useState(true)
  const [isPreloader, setIsPreloader] = useState(false)
  const [isUserExists, setIsUserExists] = useState(false)
  const [companyCompanyName, setCompanyName] = useState({
    valid: null,
    value: null,
  })
  const [companyCompanyNumber, setCompanyCompanyNumber] = useState({
    valid: null,
    value: null,
  })
  const [companyWebsite, setCompanyWebsite] = useState({
    valid: null,
    value: null,
  })
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
      companyCompanyName.value &&
      companyCompanyNumber.value &&
      companyWebsite.value &&
      email.value &&
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
        companyCompanyName: companyCompanyName.value,
        companyCompanyNumber: companyCompanyNumber.value,
        companyWebsite: companyWebsite.value,
        email: email.value,
        password: password.valid,
        authority: ROLE_COMPANY_USER,
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
              <Form.Group onChange={(e) => lt(e, 2, setCompanyName)}>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder={t('auth.org.companyName')}
                />
                {companyCompanyName.valid === false && (
                  <div className="error">{t('error.len')} 2</div>
                )}
              </Form.Group>
              <Form.Group onChange={(e) => isDigit(e, setCompanyCompanyNumber)}>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder={t('auth.org.orgNumber')}
                />
                {companyCompanyNumber.valid === false && (
                  <div className="error">{t('error.digit')}</div>
                )}
              </Form.Group>
              <Form.Group
                onChange={(e) => isWebsiteValid(e, setCompanyWebsite)}
              >
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder={t('auth.org.website')}
                />
                {companyWebsite.valid === false && (
                  <div className="error">{t('error.website')}</div>
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
            </Form>
          </>
        ) : (
          <PreLoader text={t('auth.registerModel')} />
        )}
      </AuthForm>
    </AuthContent>
  )
}
