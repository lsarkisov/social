import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Container, Row, Col } from 'react-bootstrap'
import ModelDashboard from 'components/model'
import IcImage from 'components/lib/img'
import IcImageGallery from 'components/lib/gallery'
import ModelEditProfilePopup from 'components/model/edit-profile/popup'

const imgs = [
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
  const [images, setImages] = useState(null)
  const { t } = useTranslation()

  const { uploadImage } = useSelector((state) => state.modelImageUpload)

  useEffect(() => {
    if (uploadImage) {
      const result = Object.keys(uploadImage).map((id) => {
        const url = URL.createObjectURL(uploadImage[id])
        return {
          original: url,
          thumbnail: url,
        }
      })
      setImages(result)
    }
  }, [uploadImage])

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const onPreview = () => setShow(true)

  return (
    <ModelDashboard className="edit-profile">
      <Container>
        <Row>
          <Col className="edit-profile__button">
            <ModelEditProfilePopup />
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
                <IcImage id="main" onPreview={onPreview} />
              </Col>
              <Col sm={12} md={12} lg={7}>
                <h1>Emelie</h1>
                <Row className="edit-profile__thumbnails">
                  <Col xs={6} md={3} lg={3}>
                    <IcImage id="1" onPreview={onPreview} />
                  </Col>
                  <Col xs={6} md={3} lg={3}>
                    <IcImage id="2" onPreview={onPreview} />
                  </Col>
                  <Col xs={6} md={3} lg={3}>
                    <IcImage id="3" onPreview={onPreview} />
                  </Col>
                  <Col xs={6} md={3} lg={3}>
                    <IcImage id="4" onPreview={onPreview} />
                  </Col>
                  <Col xs={6} md={3} lg={3}>
                    <IcImage id="5" onPreview={onPreview} />
                  </Col>
                  <Col xs={6} md={3} lg={3}>
                    <IcImage id="6" onPreview={onPreview} />
                  </Col>
                  <Col xs={6} md={3} lg={3}>
                    <IcImage id="7" onPreview={onPreview} />
                  </Col>
                  <Col xs={6} md={3} lg={3}>
                    <IcImage id="8" onPreview={onPreview} />
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
