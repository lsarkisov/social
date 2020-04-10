import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Logo from 'components/logo'

export default function AuthMainFooter(props) {
  return (
    <div className="main-page__footer">
      <Container>
        <ul>
          <li>
            <Link to="">Privacy policy</Link>
          </li>
          <li>
            <Link to="">Terms of use</Link>
          </li>
          <li>
            <Link to="">FAQ</Link>
          </li>
          <li>
            <Link to="">Contact </Link>
          </li>
          <li>
            <Link to="">company</Link>
          </li>
        </ul>
        <Logo />
        <p className="copyright">
          2018: ICONICLI AKTIEBOLAG - all rights reserved - Privacy
        </p>
      </Container>
    </div>
  )
}
