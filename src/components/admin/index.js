import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import IcHamburgerMenu from 'components/lib/hamburger'
import NavBar from 'components/nav-bar'
import Menu from 'components/menu'

export default function AdminDashboard(props) {
  return (
    <Container fluid className={`dashboard__admin ${props.className}`}>
      <Row>
        <NavBar>
          <IcHamburgerMenu>
            <ul className="nav-bar__list">
              <li>
                <NavLink to="/dashboard/admin/page-1">page 1</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/admin/page-2">page 2</NavLink>
              </li>
            </ul>
          </IcHamburgerMenu>
        </NavBar>
        <Col>
          <Menu />
          {props.children}
        </Col>
      </Row>
    </Container>
  )
}
