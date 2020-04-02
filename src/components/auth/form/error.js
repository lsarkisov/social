import React from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import AuthContent from 'components/auth/content'
import AuthForm from 'components/auth/form'
import { AuthNeedHelp } from 'components/auth/utils'

export default function AuthError(props) {
  const { t } = useTranslation()
  const history = useHistory()

  const goBack = () => history.goBack()

  return (
    <AuthContent>
      <AuthForm>
        <h2>{t('auth.error')}</h2>
        <Form>
          <Form.Group>
            <Button onClick={goBack} variant="primary">
              {t('auth.tryAgain')}
            </Button>
          </Form.Group>
          <Form.Group className="text-sm">
            <AuthNeedHelp />
          </Form.Group>
        </Form>
      </AuthForm>
    </AuthContent>
  )
}
