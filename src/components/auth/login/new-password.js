import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import AuthContent from '../content'
import AuthForm from '../form'

export default function AuthLoginNewPassword(props) {
  const { t } = useTranslation()

  const onSendPassword = () => {
    console.log('sent password...')
  }

  return (
    <AuthContent>
      <AuthForm>
        <h2>{t('login.newPasswordTitle')}</h2>
        <Form>
          <Form.Group>
            <Form.Control
              size="lg"
              type="password"
              placeholder={t('login.newPlaceholder')}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              size="lg"
              type="password"
              placeholder={t('login.confirmPassword')}
            />
          </Form.Group>
          <Form.Group>
            <Button onClick={onSendPassword} variant="primary">
              {t('login.changePassword')}
            </Button>
          </Form.Group>
        </Form>
      </AuthForm>
    </AuthContent>
  )
}
