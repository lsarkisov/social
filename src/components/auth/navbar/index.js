import React from 'react'
import AuthNavbarLinks from 'components/auth/navbar/links'
import SocialLinks from 'components/social-links'

export default function AuthModel(props) {
  return (
    <div className="auth-navbar">
      <AuthNavbarLinks />
      <SocialLinks />
    </div>
  )
}
