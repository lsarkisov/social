import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import AuthContent from '../content'
import AuthForm from '../form'
import { AuthMember, AuthNeedHelp } from '../utils'
import {
  lt,
  isDigit,
  isWebsiteValid,
  isEmailValid,
  isPassword,
  isConfirm,
} from '../../../utils'

export default function AuthModel(props) {
  const { t } = useTranslation()
  const [disable, setDisable] = useState(false)
  const [company, setCompany] = useState(false)
  const [number, setNumber] = useState(false)
  const [website, setWebsite] = useState(false)
  const [email, setImail] = useState(false)
  const [password, setPassword] = useState({ valid: false, value: null })
  const [confirm, setConfirm] = useState(false)

  const isValid = () => {
    if (
      !company &&
      !number &&
      !website &&
      !email &&
      !password.valid &&
      !confirm
    ) {
      setDisable(true)
    } else {
      setDisable(false)
    }
  }

  return (
    <AuthContent>
      <AuthForm>
        <h2>{t('auth.title')}</h2>
        <Form onChange={isValid}>
          <Form.Group onChange={(e) => lt(e, 1, setCompany)}>
            <Form.Control
              size="lg"
              type="text"
              placeholder={t('auth.org.companyName')}
            />
            {company && <div className="error">{t('error.len')} 2</div>}
          </Form.Group>
          <Form.Group onChange={(e) => isDigit(e, setNumber)}>
            <Form.Control
              size="lg"
              type="text"
              placeholder={t('auth.org.orgNumber')}
            />
            {number && <div className="error">{t('error.digit')}</div>}
          </Form.Group>
          <Form.Group onChange={(e) => isWebsiteValid(e, setWebsite)}>
            <Form.Control
              size="lg"
              type="text"
              placeholder={t('auth.org.website')}
            />
            {website && <div className="error">{t('error.website')}</div>}
          </Form.Group>
          <Form.Group onChange={(e) => isEmailValid(e, setImail)}>
            <Form.Control
              size="lg"
              type="email"
              placeholder={t('auth.model.email')}
            />
            {email && <div className="error">{t('error.email')}</div>}
          </Form.Group>
          <Form.Group onChange={(e) => isPassword(e, 5, setPassword)}>
            <Form.Control
              size="lg"
              type="password"
              placeholder={t('auth.model.password')}
            />
            {password.valid && (
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
            {confirm && <div className="error">{t('error.confirm')}</div>}
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
