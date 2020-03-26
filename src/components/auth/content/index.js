import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import AuthNavbar from '../navbar'
import AuthCarousel from '../carousel'

export default function AuthContent(props) {
  const { t } = useTranslation()
  const [sidebar, setSitebar] = useState(5)
  const [content, setContent] = useState(7)
  const isMain = props.className === 'main-page'

  useEffect(() => {
    if (isMain) {
      setSitebar(4)
      setContent(8)
    }
  }, [isMain])

  return (
    <div className={`auth-content ${props.className}`}>
      <AuthNavbar />
      <Row className="p-0 m-0">
        <Col xs={12} lg={sidebar} className="content-row p-0">
          {props.children}
        </Col>
        <Col xs={12} lg={content} className="carousel-row p-0">
          {isMain && <h1 className="main-title">{t('auth.main')}</h1>}
          <AuthCarousel />
        </Col>
      </Row>
    </div>
  )
}
