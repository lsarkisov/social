import React from 'react'
import { Row } from 'react-bootstrap'
import AuthNavbar from '../navbar'
import AuthContent from '../content'
import AuthSocial from '../social'

export default function AuthModel(props) {
  return (
    <Row className="auth-model">
      <div style={{ position: 'absolute', zIndex: 1000, background: 'red' }}>
        <AuthSocial />
      </div>
      <AuthNavbar />
      <AuthContent />
    </Row>
  )
}
