import React from 'react'
import SocialLogin from 'react-social-login'

function SocialButton(props) {
  return (
    <div {...props}>
      <button onClick={props.triggerLogin}>{props.children}</button>
    </div>
  )
}

export default SocialLogin(SocialButton)
