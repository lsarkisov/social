import React from 'react'
import AuthLogOut from 'components/auth/login/logout'
import SocialLinks from 'components/social-links'

export default function NavBar(props) {
  const role = localStorage.getItem('role')

  return (
    <div className="nav-bar">
      {props.children}
      <AuthLogOut />
      <SocialLinks />
    </div>
  )
}
