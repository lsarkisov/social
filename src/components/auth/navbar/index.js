import React from 'react'
import AuthNavbarSocial from './social'
import AuthNavbarLinks from './links'

export default function AuthModel(props) {
  return (
    <div className="auth-navbar">
      <AuthNavbarLinks />
      <AuthNavbarSocial />
    </div>
  )
}
