import React from 'react'
import { Link } from 'react-router-dom'
import { ScrollTo } from 'components/utils'

export default function AuthNavbarLinks() {
  return (
    <>
      <Link to="/">
        <span className="auth-navbar__logo">
          <span>i</span>
          <span>i</span>
        </span>
      </Link>
      <div className="auth-navbar__link">
        <ScrollTo to="about">About</ScrollTo>
        <Link to="/faq" className="bounceOutLeft">
          Faq
        </Link>
        <Link to="/contacts" className="bounceOutLeft">
          Contact
        </Link>
        <ScrollTo to="how-it-works">How it works</ScrollTo>
      </div>
    </>
  )
}
