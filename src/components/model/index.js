import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container, Row, Col, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NavBar from 'components/nav-bar'
import Menu from 'components/menu'

export default function ModelDashboard(props) {
  const { t } = useTranslation()

  return (
    <Container fluid className="dashboard__model">
      <Row>
        <NavBar>
          <ul className="nav-bar__list">
            <li>
              <Link to="">{t('dashboard.navbar.myProfile')}</Link>
            </li>
            <li className="nav-bar__active">
              <Link to="">{t('dashboard.navbar.jobs')}</Link>
              <Badge variant="light">2</Badge>
            </li>
            <li>
              <Link to="">{t('dashboard.navbar.messages')}</Link>
            </li>
            <li>
              <Link to="">{t('dashboard.navbar.settings')}</Link>
            </li>
          </ul>
        </NavBar>
        <Col>
          <Menu />
          <h1>ModelDashboard</h1>
        </Col>
      </Row>
    </Container>
  )
}
