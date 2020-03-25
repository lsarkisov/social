import React from 'react'

export default function AuthForm(props) {
  return (
    <div className="auth-content__form" {...props}>
      <div className="auth-content__form-wrapper">{props.children}</div>
    </div>
  )
}
