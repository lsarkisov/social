import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container, Row, Col, Badge } from 'react-bootstrap'
import ModelDashboard from 'components/model'

export default function ModelJobs(props) {
  const { t } = useTranslation()

  return (
    <ModelDashboard>
      <h1>Model jobs</h1>
    </ModelDashboard>
  )
}
