import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container, Row, Col, Button, Image } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ModelDashboard from 'components/model'
import IcImage from 'components/lib/img'

export default function ModelEditProfile(props) {
  const { t } = useTranslation()

  return (
    <ModelDashboard className="edit-profile">
      <Container>
        <Row>
          <Col className="edit-profile__button">
            <Button className="btn-icon">
              <FontAwesomeIcon icon={'cog'} />
              {t('profile.button')}
            </Button>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={12} lg={8}>
            <Row className="p-0">
              <Col sm={12} md={12} lg={5} className="edit-profile__image">
                <IcImage src="https://www.dw.com/image/53008431_301.jpg" />
              </Col>
              <Col sm={12} md={12} lg={7}>
                <h1>Emelie</h1>
                <Row className="edit-profile__thumbnails">
                  <Col xs={6} md={4} lg={4}>
                    <IcImage src="https://www.dw.com/image/53008431_301.jpg" />
                  </Col>
                  <Col xs={6} md={4} lg={4}>
                    <IcImage src="https://www.dw.com/image/53008431_301.jpg" />
                  </Col>
                  <Col xs={6} md={4} lg={4}>
                    <IcImage src="https://www.dw.com/image/53008431_301.jpg" />
                  </Col>
                  <Col xs={6} md={4} lg={4}>
                    <IcImage src="https://www.dw.com/image/53008431_301.jpg" />
                  </Col>
                  <Col xs={6} md={4} lg={4}>
                    <IcImage src="https://www.dw.com/image/53008431_301.jpg" />
                  </Col>
                  <Col xs={6} md={4} lg={4}>
                    <IcImage src="https://www.dw.com/image/53008431_301.jpg" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col sm={12} md={12} lg={4}>
            2
          </Col>
        </Row>
      </Container>
    </ModelDashboard>
  )
}
