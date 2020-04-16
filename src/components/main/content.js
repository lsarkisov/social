import React from 'react'
import { Container } from 'react-bootstrap'
import AuthMainAbout from 'components/main/about'
import AuthMainHowItWorks from 'components/main/how-it-works'
import AuthMainCustomers from 'components/main/customers'

export default function AuthMainContent(props) {
  return (
    <div className="main-page__content">
      <i className="bg bg-1" />
      <i className="bg bg-2" />
      <i className="bg bg-3" />

      <Container>
        <AuthMainAbout />
        <AuthMainHowItWorks />
        <AuthMainCustomers />
      </Container>
    </div>
  )
}
