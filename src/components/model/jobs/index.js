import React from 'react'
import ModelDashboard from 'components/model'
import { useTranslation } from 'react-i18next'
import { Nav } from 'react-bootstrap'

export default function ModelJobs(props) {
  const { t } = useTranslation()

  return (
    <ModelDashboard className="dashboard__model-jobs">
      <Nav className="menu-tabs" variant="pills" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link eventKey="link-0">{t('jobs.menu.btn1')}</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">{t('jobs.menu.btn2')}</Nav.Link>
        </Nav.Item>
      </Nav>
      <h1>Model jobs</h1>
    </ModelDashboard>
  )
}
