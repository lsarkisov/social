import React, { useEffect, useRef } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import AuthContent from 'components/auth/content'
import AuthForm from 'components/auth/form'
import { ForgotPassword, AuthNeedHelp } from 'components/auth/utils'

function getWidth() {
  return (document.documentElement.scrollWidth / 100) * 12.5
}

function getHeight() {
  return document.documentElement.scrollHeight
}

function getViePortHeight() {
  return window.innerHeight
}

function draw(params) {
  const { context, delta, p1, p2, color } = params

  context.fillStyle = color

  context.beginPath()
  context.moveTo(0, 0)
  context.lineTo(getWidth() - delta, 0)
  context.lineTo(getWidth() - getWidth() / p1, getViePortHeight())
  context.lineTo(getWidth() - getWidth() / p2, getHeight())
  context.lineTo(0, getHeight())

  context.closePath()
  context.fill()
}

function initCanvas(params) {
  const { context } = params

  context.canvas.height = getHeight()
  context.canvas.width = getWidth()

  window.addEventListener('resize', () => {
    context.canvas.height = getHeight()
    context.canvas.width = getWidth()
    draw(params)
  })

  draw(params)
}

export default function AuthMain(props) {
  const { t } = useTranslation()
  const shape1 = useRef(null)
  const shape2 = useRef(null)

  useEffect(() => {
    const canvas1 = shape1.current.getContext('2d').canvas
    const ctx1 = canvas1.getContext('2d')
    initCanvas({ context: ctx1, delta: 0, p1: 10, p2: 4.4, color: '#ff929c' })

    const canvas2 = shape2.current.getContext('2d').canvas
    const ctx2 = canvas2.getContext('2d')
    initCanvas({ context: ctx2, delta: 50, p1: 1.5, p2: 1.4, color: '#ff929c' })
  })

  return (
    <>
      <canvas className="canvas canvas__opacity" ref={shape1} />
      <canvas className="canvas" ref={shape2} />
      <AuthContent className="main-page">
        <AuthForm>
          <h2>
            Iconic<span className="sub-text">li</span>
          </h2>
          <p className="main-page__slogan">
            {t('auth.slogan.first')}
            <span className="sub-text"> {t('auth.slogan.second')}</span>
          </p>
          <Form>
            <Form.Group>
              <Link to="/auth/login">
                <Button variant="primary">{t('login.title')}</Button>
              </Link>
            </Form.Group>
            <Form.Group className="text-sm main-page__forgot-password">
              <ForgotPassword />
            </Form.Group>
            <Form.Group>
              <Link to="/auth/model">
                <Button variant="primary">{t('auth.registerModel')}</Button>
              </Link>
            </Form.Group>
            <Form.Group>
              <Link to="/auth/company">
                <Button variant="primary">{t('auth.registerCompany')}</Button>
              </Link>
            </Form.Group>
            <Form.Group className="text-sm">
              <AuthNeedHelp />
            </Form.Group>
          </Form>
        </AuthForm>
      </AuthContent>
      <div className="main-page__content">
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
    </>
  )
}
