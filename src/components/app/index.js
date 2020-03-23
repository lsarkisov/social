import React from 'react'
import { Container } from 'react-bootstrap'
import Routes from '../../routes'

import { REACT_APP_INSTAGRAM_CLIENT_ID } from '../../const/api'

export default function App(props) {
  console.log('TEST', REACT_APP_INSTAGRAM_CLIENT_ID)
  return (
    <Container fluid>
      <Routes />
    </Container>
  )
}
