import React, { useEffect, useRef, useState } from 'react'
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

function draw(ctx, delta, angle1, angle2, color) {
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(0, 0)
  ctx.lineTo(getWidth() - delta, 0)
  ctx.lineTo(getWidth() - getWidth() / angle1, getViePortHeight())
  ctx.lineTo(getWidth() - getWidth() / angle2, getHeight())
  ctx.lineTo(0, getHeight())

  ctx.closePath()
  ctx.fill()
}

function initCanvas(ctx, delta, angle1, angle2, color) {
  ctx.canvas.height = getHeight()
  ctx.canvas.width = getWidth()

  window.addEventListener('resize', () => {
    ctx.canvas.height = getHeight()
    ctx.canvas.width = getWidth()
    draw(ctx, delta, angle1, angle2, color)
  })

  draw(ctx, delta, angle1, angle2, color)
}

export default function AuthMain(props) {
  const { t } = useTranslation()
  const shape1 = useRef(null)
  const shape2 = useRef(null)

  useEffect(() => {
    const canvas1 = shape1.current.getContext('2d').canvas
    const ctx1 = canvas1.getContext('2d')
    initCanvas(ctx1, 0, 10, 4.4, '#ff929c')

    const canvas2 = shape2.current.getContext('2d').canvas
    const ctx2 = canvas2.getContext('2d')
    initCanvas(ctx2, 50, 1.5, 1.4, '#ff929c')
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
