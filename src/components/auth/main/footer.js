import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import Logo from 'components/logo'

export default function AuthMainFooter(props) {
  const { t } = useTranslation()

  return (
    <div className="main-page__footer">
      <Container>
        <ul>
          <li>
            <Link to="">{t('footer.policy')}</Link>
          </li>
          <li>
            <Link to="">{t('footer.terms')}</Link>
          </li>
          <li>
            <Link to="">{t('footer.faq')}</Link>
          </li>
          <li>
            <Link to="">{t('footer.contact')}</Link>
          </li>
          <li>
            <Link to="">{t('footer.company')}</Link>
          </li>
        </ul>
        <Logo />
        <p className="copyright">{t('footer.copyright')}</p>
      </Container>
    </div>
  )
}
