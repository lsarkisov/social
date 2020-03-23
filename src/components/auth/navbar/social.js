import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'

export default function AuthNavbarSocial() {
  return (
    <div className="auth-navbar__social">
      <a href="/">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="/">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="/">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </div>
  )
}
