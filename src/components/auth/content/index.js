import React from 'react'
import { Row, Col } from 'react-bootstrap'
import AuthNavbar from '../navbar'
import AuthCarousel from '../carousel'

export default function AuthContent(props) {
  return (
    <div className="auth-content">
      <AuthNavbar />
      <Row>
        <Col xs={12} lg={5} className="content-row">
          {props.children}
        </Col>
        <Col xs={12} lg={7} className="carousel-row">
          <AuthCarousel />
        </Col>
      </Row>
    </div>
  )
}
