import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
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

export default function AuthModel(props) {
  const { t } = useTranslation()
  const [disable, setDisable] = useState(true)
  const [company, setCompany] = useState(null)
  const [number, setNumber] = useState(null)
  const [website, setWebsite] = useState(null)
  const [email, setImail] = useState(null)
  const [password, setPassword] = useState({ valid: null, value: null })
  const [confirm, setConfirm] = useState({ value: null })

  const isValid = () => {
    if (
      company &&
      number &&
      website &&
      email &&
      password.valid &&
      password.value === confirm.value
    ) {
      setDisable(false)
    } else {
      setDisable(true)
    }
  }

  return (
    <AuthContent>
      <AuthForm>
        <h2>{t('auth.title')}</h2>
        <Form onKeyUp={isValid}>
          <Form.Group onChange={(e) => lt(e, 2, setCompany)}>
            <Form.Control
              size="lg"
              type="text"
              placeholder={t('auth.org.companyName')}
            />
            {company === false && (
              <div className="error">{t('error.len')} 2</div>
            )}
          </Form.Group>
          <Form.Group onChange={(e) => isDigit(e, setNumber)}>
            <Form.Control
              size="lg"
              type="text"
              placeholder={t('auth.org.orgNumber')}
            />
            {number === false && (
              <div className="error">{t('error.digit')}</div>
            )}
          </Form.Group>
          <Form.Group onChange={(e) => isWebsiteValid(e, setWebsite)}>
            <Form.Control
              size="lg"
              type="text"
              placeholder={t('auth.org.website')}
            />
            {website === false && (
              <div className="error">{t('error.website')}</div>
            )}
          </Form.Group>
          <Form.Group onChange={(e) => isEmailValid(e, setImail)}>
            <Form.Control
              size="lg"
              type="email"
              placeholder={t('auth.model.email')}
            />
            {email === false && <div className="error">{t('error.email')}</div>}
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
          <Form.Group className={`${disable ? 'disabled' : ''}`}>
            <Button variant="primary">{t('auth.register')}</Button>
          </Form.Group>
          <Form.Group className="text-sm">
            <AuthMember />
          </Form.Group>
          <Form.Group className="text-sm">
            <AuthNeedHelp />
          </Form.Group>
        </Form>
      </AuthForm>
    </AuthContent>
  )
}
