import React, { useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'

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
          width: `${Math.round(width / 5)}px`,
          borderTopWidth: `${height}px`,
        }}
      />
      <div className="container">
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
        <h1>TEST!!!</h1>
      </div>
    </div>
  )
}
