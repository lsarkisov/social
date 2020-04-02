import React from 'react'
import AuthNavbarSocial from 'components/auth/navbar/social'
import AuthNavbarLinks from 'components/auth/navbar/links'

export default function AuthModel(props) {
  return (
    <div className="auth-navbar">
      <AuthNavbarLinks />
      <AuthNavbarSocial />
    </div>
  )
}
