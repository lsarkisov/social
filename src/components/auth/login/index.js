import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import AuthContent from '../content'
import AuthForm from '../form'
import { AuthNeedHelp, PreLoader } from '../utils'

export default function AuthLogin(props) {
  const [isLogging, setIsLogging] = useState(false)
  const { t } = useTranslation()

  const onLoging = () => {
    setIsLogging(true)
  }

  return (
    <AuthContent>
      {!isLogging ? (
        <AuthForm>
          <h2>{t('login.title')}</h2>
          <Form>
            <Form.Group>
              <Form.Control
                size="lg"
                type="email"
                placeholder={t('auth.model.email')}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                size="lg"
                type="password"
                placeholder={t('auth.model.password')}
              />
            </Form.Group>
            <Form.Group>
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
