import React from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Row, Col } from 'react-bootstrap'
import IcImage from 'components/lib/img'
import { modelImageUpdate } from 'actions/model'

export default function ModelEditProfileBooking(props) {
  const { t } = useTranslation()

  const dispatch = useDispatch()

  const onPreview = () => {}
  const onDrop = (data) => dispatch(modelImageUpdate(data))

  return (
    <Row>
      <Col sm={12} md={12} lg={7}>
        <Row className="edit-profile__thumbnails">
          <Col xs={6} md={3} lg={3}>
            <IcImage onDrop={onDrop} id="1" onPreview={onPreview} />
          </Col>
          <Col xs={6} md={3} lg={3}>
            <IcImage onDrop={onDrop} id="2" onPreview={onPreview} />
          </Col>
          <Col xs={6} md={3} lg={3}>
            <IcImage onDrop={onDrop} id="3" onPreview={onPreview} />
          </Col>
          <Col xs={6} md={3} lg={3}>
            <IcImage onDrop={onDrop} id="4" onPreview={onPreview} />
          </Col>
          <Col xs={6} md={3} lg={3}>
            <IcImage onDrop={onDrop} id="5" onPreview={onPreview} />
          </Col>
          <Col xs={6} md={3} lg={3}>
            <IcImage onDrop={onDrop} id="6" onPreview={onPreview} />
          </Col>
          <Col xs={6} md={3} lg={3}>
            <IcImage onDrop={onDrop} id="7" onPreview={onPreview} />
          </Col>
          <Col xs={6} md={3} lg={3}>
            <IcImage onDrop={onDrop} id="8" onPreview={onPreview} />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
