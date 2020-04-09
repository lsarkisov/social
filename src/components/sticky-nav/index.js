import React, { useEffect, useState } from 'react'

export default function StickyNav(props) {
  const [show, setShow] = useState(false)
  const delta = 150

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      if (document.documentElement.scrollTop > window.innerHeight - delta) {
        setShow(true)
      } else {
        setShow(false)
      }
    })
  })
  return (
    <nav className={`sticky-nav ${show ? 'sticky-nav__show' : ''}`}>
      {props.children}
    </nav>
  )
}
