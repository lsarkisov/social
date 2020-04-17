import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container, Row, Col, Badge } from 'react-bootstrap'
import ModelDashboard from 'components/model'

export default function ModelSettings(props) {
  const { t } = useTranslation()

  return (
    <ModelDashboard>
      <h1>Model settings</h1>
    </ModelDashboard>
  )
}
