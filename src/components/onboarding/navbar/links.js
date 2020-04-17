import React from 'react'
import { Link } from 'react-router-dom'

export default function OnboardingNavbarLinks() {
  return (
    <>
      <Link to="/">
        <span className="onboarding-navbar__logo">
          <span>i</span>
          <span>i</span>
        </span>
      </Link>
      <div className="onboarding-navbar__link">
        <Link to="/">About</Link>
        <Link to="/faq" className="bounceOutLeft">
          Faq
        </Link>
        <Link to="/contacts" className="bounceOutLeft">
          Contact
        </Link>
        <Link to="/">How it works</Link>
      </div>
    </>
  )
}
