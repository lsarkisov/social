import React from 'react'
import { InputGroup, FormControl, Navbar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Menu(props) {
  return (
    <div className="menu-wrapper">
      <Navbar className="menu" expand="lg" variant="light" bg="primary">
        <Navbar.Brand href="#">Faq</Navbar.Brand>
        <Navbar.Brand href="#">Contact</Navbar.Brand>
        <Navbar.Brand href="#">Log out</Navbar.Brand>
      </Navbar>

      <InputGroup className="mb-3">
        <FormControl
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <InputGroup.Text id="basic-addon2">
            <FontAwesomeIcon icon={'search'} />
          </InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>
    </div>
  )
}
