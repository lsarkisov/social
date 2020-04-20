import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap'
import ModelDashboard from 'components/model'
import IcImage from 'components/lib/img'
import IcModal from 'components/lib/modal'
import IcImageGallery from 'components/lib/gallery'

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
]

export default function ModelEditProfile(props) {
  const [show, setShow] = useState(false)
  const { t } = useTranslation()

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const onPreview = () => setShow(true)

  return (
    <ModelDashboard className="edit-profile">
      <Container>
        <Row>
          <Col className="edit-profile__button">
            <IcModal icon="cog" btnText={t('profile.button')}>
              <>
                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                  <Tab eventKey="home" title="Home">
                    <h1>TEST 1</h1>
                  </Tab>
                  <Tab eventKey="profile" title="Profile">
                    <h1>TEST 2</h1>
                  </Tab>
                  <Tab eventKey="contact" title="Contact">
                    <h1>TEST 3</h1>
                  </Tab>
                </Tabs>
              </>
            </IcModal>
            <IcImageGallery
              show={show}
              images={images}
              handleClose={handleClose}
              handleShow={handleShow}
            >
              <span className="ic-gallery__tab">Portfolio</span>
            </IcImageGallery>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={12} lg={8}>
            <Row className="p-0">
              <Col sm={12} md={12} lg={5} className="edit-profile__image">
                <IcImage onPreview={onPreview} />
              </Col>
              <Col sm={12} md={12} lg={7}>
                <h1>Emelie</h1>
                <Row className="edit-profile__thumbnails">
                  <Col xs={6} md={4} lg={4}>
                    <IcImage onPreview={onPreview} />
                  </Col>
                  <Col xs={6} md={4} lg={4}>
                    <IcImage onPreview={onPreview} />
                  </Col>
                  <Col xs={6} md={4} lg={4}>
                    <IcImage onPreview={onPreview} />
                  </Col>
                  <Col xs={6} md={4} lg={4}>
                    <IcImage onPreview={onPreview} />
                  </Col>
                  <Col xs={6} md={4} lg={4}>
                    <IcImage onPreview={onPreview} />
                  </Col>
                  <Col xs={6} md={4} lg={4}>
                    <IcImage onPreview={onPreview} />
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
