import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'

export default function AuthNavbarSocial() {
  return (
    <div className="auth-navbar__social">
      <a target="_blank" href="https://www.facebook.com/iconiclicom">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a target="_blank" href="https://twitter.com/iconicli">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a target="_blank" href="https://www.instagram.com/iconicli_com">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </div>
  )
}
