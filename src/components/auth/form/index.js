import React from 'react'

export default function AuthForm(props) {
  return (
    <div className="auth-content__form">
      <div>{props.children}</div>
    </div>
  )
}
