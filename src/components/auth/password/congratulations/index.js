import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import AuthContent from 'components/auth/content'
import AuthForm from 'components/auth/form'

export default function AuthLoginCongratulations(props) {
  const { t } = useTranslation()

  return (
    <AuthContent>
      <AuthForm>
        <h2 className="title-lg">{t('login.congratulations.title')}</h2>
        <p className="auth-login__subtitle-extra">
          {t('login.congratulations.message')}
        </p>
        <Form>
          <Form.Group className="auth-login__congrat-button">
            <Link to="/auth/login">
              <Button variant="primary">
                {t('login.congratulations.button')}{' '}
                <FontAwesomeIcon icon={faCaretRight} />
              </Button>
            </Link>
          </Form.Group>
        </Form>
      </AuthForm>
    </AuthContent>
  )
}
