import React from 'react'
import { Container, Row, Button, Navbar, Form } from 'react-bootstrap'

export default function UIKit(props) {
  return (
    <Container fluid className="ui">
      <Row className="ui__row">
        <div>
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <h6>Heading 6</h6>
        </div>
      </Row>
      <Row className="ui__row">
        <Button size="sm" variant="primary">
          Primary
        </Button>{' '}
        <Button size="sm" variant="secondary">
          Secondary
        </Button>{' '}
        <Button size="sm" variant="success">
          Success
        </Button>{' '}
        <Button size="sm" variant="warning">
          Warning
        </Button>{' '}
        <Button size="sm" variant="danger">
          Danger
        </Button>{' '}
        <Button size="sm" variant="info">
          Info
        </Button>{' '}
        <Button size="sm" variant="light">
          Light
        </Button>{' '}
        <Button size="sm" variant="dark">
          Dark
        </Button>{' '}
        <Button size="sm" variant="link">
          Link
        </Button>
      </Row>
      <Row className="ui__row">
        <Button variant="primary">Primary</Button>{' '}
        <Button variant="secondary">Secondary</Button>{' '}
        <Button variant="success">Success</Button>{' '}
        <Button variant="warning">Warning</Button>{' '}
        <Button variant="danger">Danger</Button>{' '}
        <Button variant="info">Info</Button>{' '}
        <Button variant="light">Light</Button>{' '}
        <Button variant="dark">Dark</Button>{' '}
        <Button variant="link">Link</Button>
      </Row>
      <Row className="ui__row">
        <Navbar
          className="navbar__wrapper"
          expand="lg"
          variant="light"
          bg="primary"
        >
          <Navbar.Brand href="#">Navbar 1</Navbar.Brand>
          <Navbar.Brand href="#">Navbar 2</Navbar.Brand>
          <Navbar.Brand href="#">Navbar 3</Navbar.Brand>
        </Navbar>
      </Row>
      <Row className="ui__row">
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Input lg</Form.Label>
            <Form.Control size="lg" type="text" placeholder="user name" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Example select</Form.Label>
            <Form.Control as="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>Example multiple select</Form.Label>
            <Form.Control as="select" multiple>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
        </Form>
      </Row>
    </Container>
  )
}
