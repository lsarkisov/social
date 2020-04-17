import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import OnboardingContent from 'components/onboarding/content'
import OnboardingForm from 'components/onboarding/form'

export default function OnboardingLoginCongratulations(props) {
  const { t } = useTranslation()

  return (
    <OnboardingContent>
      <OnboardingForm>
        <h2 className="title-lg">{t('login.congratulations.title')}</h2>
        <p className="onboarding-login__subtitle-extra">
          {t('login.congratulations.message')}
        </p>
        <Form>
          <Form.Group className="onboarding-login__congrat-button">
            <Link to="/onboarding/login">
              <Button variant="primary">
                {t('login.congratulations.button')}{' '}
                <FontAwesomeIcon icon={faCaretRight} />
              </Button>
            </Link>
          </Form.Group>
        </Form>
      </OnboardingForm>
    </OnboardingContent>
  )
}
