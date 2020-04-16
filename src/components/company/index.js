import React from 'react'
import { Container, Row, Col, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NavBar from 'components/nav-bar'

export default function CompanyDashboard(props) {
  return (
    <Container fluid className="dashboard__company">
      <Row>
        <NavBar>
          <ul className="nav-bar__list">
            <li>
              <Link to="">Item 1</Link>
            </li>
            <li className="nav-bar__active">
              <Link to="">Item 1</Link>
              <Badge variant="light">5</Badge>
            </li>
            <li>
              <Link to="">Item 1</Link>
            </li>
            <li>
              <Link to="">Item 1</Link>
            </li>
            <li>
              <Link to="">Item 1</Link>
            </li>
          </ul>
        </NavBar>
        <Col>
          <h1>Company dashboard</h1>
        </Col>
      </Row>
    </Container>
  )
}
