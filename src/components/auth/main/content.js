import React, { useState, useRef } from 'react'
import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import AuthMainAbout from 'components/auth/main/about'
import AuthMainHowItWorks from 'components/auth/main/how-it-works'

export default function AuthMainContent(props) {
  const { t } = useTranslation()
  const content = useRef(null)
  const [height, setHeight] = useState(null)
  const [width, setWidth] = useState(null)

  useState(() => {
    setTimeout(() => {
      setHeight(content.current.offsetHeight)
      setWidth(content.current.offsetWidth)
    })
    window.addEventListener('resize', () => {
      setHeight(content.current.offsetHeight)
      setWidth(content.current.offsetWidth)
    })
  }, [content])

  return (
    <div className="main-page__content" ref={content}>
      <i
        className="bg bg-1"
        style={{
          width: `${Math.round(width / 3)}px`,
          borderTopWidth: `${height}px`,
        }}
      />
      <i
        className="bg bg-2"
        style={{
          width: `${Math.round(width / 3)}px`,
          borderTopWidth: `${height}px`,
        }}
      />

      <i
        className="bg bg-3"
        style={{
          width: `${Math.round(width / 4)}px`,
          borderBottomWidth: `${height}px`,
        }}
      />
      <Container>
        <AuthMainAbout />
        <AuthMainHowItWorks />
      </Container>
    </div>
  )
}
