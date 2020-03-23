import React from 'react'
import SocialLogin from 'react-social-login'

function SocialButton(props) {
  return (
    <div>
      <button onClick={props.triggerLogin}>login</button>
    </div>
  )
}

export default SocialLogin(SocialButton)
