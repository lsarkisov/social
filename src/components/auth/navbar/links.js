import React from 'react'
import { Link } from 'react-router-dom'

export default function AuthNavbarLinks() {
  return (
    <>
      <div className="auth-navbar__icon">
        <span>i</span>
        <span>i</span>
      </div>
      <div className="auth-navbar__link">
        <Link to="/" className="bounceOutLeft">
          About
        </Link>
        <Link to="/" className="bounceOutLeft">
          Faq
        </Link>
        <Link to="/" className="bounceOutLeft">
          Contact
        </Link>
        <Link to="/" className="bounceOutLeft">
          How it works
        </Link>
      </div>
    </>
  )
}
