import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import AuthContent from '../content'
import AuthForm from '../form'

export default function AuthModel(props) {
  const { t } = useTranslation()

  return (
    <AuthContent>
      <AuthForm>
        <h2>{t('auth.title')}</h2>
        <Form>
          <Form.Group>
            <Form.Control
              size="lg"
              type="text"
              placeholder={t('auth.org.companyName')}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              size="lg"
              type="text"
              placeholder={t('auth.org.orgNumber')}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              size="lg"
              type="text"
              placeholder={t('auth.org.website')}
            />
          </Form.Group>
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
            <Form.Control
              size="lg"
              type="password"
              placeholder={t('auth.model.confirmPassword')}
            />
          </Form.Group>
          <Form.Group>
            <Button variant="primary">{t('auth.register')}</Button>
          </Form.Group>
          <Form.Group className="text-sm">
            {t('auth.link.question')} <Link to="">{t('auth.link.click')}</Link>
          </Form.Group>
          <Form.Group className="text-sm">
            <Link to="">{t('auth.help')}</Link>
          </Form.Group>
        </Form>
      </AuthForm>
    </AuthContent>
  )
}
