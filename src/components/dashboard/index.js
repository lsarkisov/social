import React from 'react'
import AuthLogOut from 'components/auth/login/logout'

export default function Dashboard(props) {
  const role = localStorage.getItem('role')

  return (
    <div>
      <AuthLogOut />
      <h1>Dashboard {role && role}</h1>
    </div>
  )
}
