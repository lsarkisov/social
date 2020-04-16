import React from 'react'
import AuthLogOut from 'components/auth/login/logout'
import SocialLinks from 'components/social-links'
import Logo from 'components/logo'

export default function NavBar(props) {
  const role = localStorage.getItem('role')

  return (
    <div className="nav-bar">
      <div className="nav-bar__wrapper">
        <Logo />
        {props.children}
        <AuthLogOut />
        <SocialLinks />
      </div>
    </div>
  )
}
