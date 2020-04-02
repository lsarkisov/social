import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import AuthContent from 'components/auth/content'
import AuthForm from 'components/auth/form'
import { isPassword, isConfirm } from 'utils/validator'

export default function AuthLoginNewPassword(props) {
  const { t } = useTranslation()
  const [disable, setDisable] = useState(true)
  const [password, setPassword] = useState({ valid: null, value: null })
  const [confirm, setConfirm] = useState({ value: null })

  const onSendPassword = () => {
    console.log('sent password...')
  }

  const isValid = () => {
    if (password.valid && password.value === confirm.value) {
      setDisable(false)
    } else {
      setDisable(true)
    }
  }

  return (
    <AuthContent>
      <AuthForm>
        <h2>{t('login.newPasswordTitle')}</h2>
        <Form onKeyUp={isValid}>
          <Form.Group onChange={(e) => isPassword(e, 6, setPassword)}>
            <Form.Control
              size="lg"
              type="password"
              placeholder={t('login.newPlaceholder')}
            />
            {password.valid === false && (
              <div className="error">{t('error.password')} 6</div>
            )}
          </Form.Group>

          <Form.Group onChange={(e) => isConfirm(e, setConfirm)}>
            <Form.Control
              size="lg"
              type="password"
              placeholder={t('login.confirmPassword')}
            />
            {confirm.value && confirm.value !== password.value && (
              <div className="error">{t('error.confirm')}</div>
            )}
          </Form.Group>
          <Form.Group className={`${disable ? 'disabled' : ''}`}>
            <Button onClick={onSendPassword} variant="primary">
              {t('login.changePassword')}
            </Button>
          </Form.Group>
        </Form>
      </AuthForm>
    </AuthContent>
  )
}
