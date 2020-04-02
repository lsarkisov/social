import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import AuthContent from 'components/auth/content'
import AuthForm from 'components/auth/form'
import { AuthMember, AuthNeedHelp } from 'components/auth/utils'
import { isAlpha, isEmailValid, isPassword, isConfirm } from 'utils/validator'
import AuthSocial from 'components/auth/social'

export default function AuthCompany(props) {
  const { t } = useTranslation()
  const [disable, setDisable] = useState(true)
  const [name, setName] = useState(null)
  const [email, setImail] = useState(null)
  const [password, setPassword] = useState({ valid: null, value: null })
  const [confirm, setConfirm] = useState({ valid: null, value: null })

  const isValid = () => {
    if (name && email && password.valid && confirm.valid) {
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
          <Form.Group onChange={(e) => isAlpha(e, 3, setName)}>
            <Form.Control
              size="lg"
              type="text"
              placeholder={t('auth.model.name')}
            />
            {name === false && <div className="error">{t('error.len')} 3</div>}
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
          <Form.Group
            onChange={(e) => isConfirm(e, password.value, setConfirm)}
          >
            <Form.Control
              size="lg"
              type="password"
              placeholder={t('auth.model.confirmPassword')}
            />
            {confirm.valid === false && (
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
          <Form.Group className="text-sm">
            {t('auth.model.orSocial')} <AuthSocial />
          </Form.Group>
        </Form>
      </AuthForm>
    </AuthContent>
  )
}
