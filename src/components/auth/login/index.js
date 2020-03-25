import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import AuthContent from '../content'
import AuthForm from '../form'

export default function AuthLogin(props) {
  const { t } = useTranslation()

  return (
    <AuthContent>
      <AuthForm>
        <h2>{t('auth.login')}</h2>
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
            <Button variant="primary">{t('auth.login')}</Button>
          </Form.Group>
          <Form.Group className="text-sm">
            <Link to="">{t('auth.link.click')}</Link>
          </Form.Group>
        </Form>
      </AuthForm>
    </AuthContent>
  )
}
