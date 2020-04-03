import React from 'react'

export default function Dashboard(props) {
  const role = localStorage.getItem('role')

  return (
    <div>
      <h1>Dashboard {role && role}</h1>
    </div>
  )
}
