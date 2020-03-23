import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import AuthNavbar from '../navbar'
import AuthCarousel from '../carousel'

export default function AuthContent(props) {
  return (
    <Row className="auth-content">
      <AuthNavbar />
      <Col lg={5}>{props.children}</Col>
      <Col lg={7} className="auth-content__wrapper">
        <AuthCarousel />
      </Col>
    </Row>
  )
}
