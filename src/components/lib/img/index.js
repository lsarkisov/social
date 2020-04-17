import React from 'react'

export default function IcImage(props) {
  return (
    <div
      className="ic-image"
      style={{ backgroundImage: `url(${props.src})` }}
    />
  )
}
