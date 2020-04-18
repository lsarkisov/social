import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container, Row, Col } from 'react-bootstrap'
import ModelDashboard from 'components/model'
import IcImage from 'components/lib/img'
import IcModal from 'components/lib/modal'

export default function ModelEditProfile(props) {
  const { t } = useTranslation()

  return (
    <ModelDashboard className="edit-profile">
      <Container>
        <Row>
          <Col className="edit-profile__button">
            <IcModal icon="cog" btnText={t('profile.button')}>
              <h1>TEST!</h1>
            </IcModal>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={12} lg={8}>
            <Row className="p-0">
              <Col sm={12} md={12} lg={5} className="edit-profile__image">
                <IcImage />
              </Col>
              <Col sm={12} md={12} lg={7}>
                <h1>Emelie</h1>
                <Row className="edit-profile__thumbnails">
                  <Col xs={6} md={4} lg={4}>
                    <IcImage />
                  </Col>
                  <Col xs={6} md={4} lg={4}>
                    <IcImage />
                  </Col>
                  <Col xs={6} md={4} lg={4}>
                    <IcImage />
                  </Col>
                  <Col xs={6} md={4} lg={4}>
                    <IcImage />
                  </Col>
                  <Col xs={6} md={4} lg={4}>
                    <IcImage />
                  </Col>
                  <Col xs={6} md={4} lg={4}>
                    <IcImage />
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
