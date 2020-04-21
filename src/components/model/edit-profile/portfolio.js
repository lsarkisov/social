import React from 'react'
import { useDispatch } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import IcImage from 'components/lib/img'
import { modelImageUpdate } from 'actions/model'

export default function ModelEditProfilePortfolio(props) {
  const dispatch = useDispatch()

  const onPreview = () => {}
  const onDrop = (data) => dispatch(modelImageUpdate(data))

  return (
    <Row className="portfolio">
      <Col sm={12} md={12} lg={9}>
        <Row className="edit-profile__thumbnails">
          <Col xs={6} md={3} lg={3}>
            <IcImage drop={true} onDrop={onDrop} id="1" onPreview={onPreview}>
              <div className="thumbnails-text">upload from device</div>
            </IcImage>
          </Col>
          <Col xs={6} md={3} lg={3}>
            <IcImage drop={true} onDrop={onDrop} id="2" onPreview={onPreview}>
              <div className="thumbnails-text">upload from device</div>
            </IcImage>
          </Col>
          <Col xs={6} md={3} lg={3}>
            <IcImage drop={true} onDrop={onDrop} id="3" onPreview={onPreview}>
              <div className="thumbnails-text">upload from device</div>
            </IcImage>
          </Col>
          <Col xs={6} md={3} lg={3}>
            <IcImage drop={true} onDrop={onDrop} id="4" onPreview={onPreview}>
              <div className="thumbnails-text">upload from device</div>
            </IcImage>
          </Col>
          <Col xs={6} md={3} lg={3}>
            <IcImage drop={true} onDrop={onDrop} id="5" onPreview={onPreview}>
              <div className="thumbnails-text">upload from device</div>
            </IcImage>
          </Col>
          <Col xs={6} md={3} lg={3}>
            <IcImage drop={true} onDrop={onDrop} id="6" onPreview={onPreview}>
              <div className="thumbnails-text">upload from device</div>
            </IcImage>
          </Col>
          <Col xs={6} md={3} lg={3}>
            <IcImage drop={true} onDrop={onDrop} id="7" onPreview={onPreview}>
              <div className="thumbnails-text">upload from device</div>
            </IcImage>
          </Col>
          <Col xs={6} md={3} lg={3}>
            <IcImage drop={true} onDrop={onDrop} id="8" onPreview={onPreview}>
              <div className="thumbnails-text">upload from device</div>
            </IcImage>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
