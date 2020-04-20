import React from 'react'
import { Row, Col } from 'react-bootstrap'
import IcImage from './image'

export default function IcThumbnails(props) {
  return (
    <Row className="edit-profile__thumbnails">
      <Col xs={6} md={3} lg={3}>
        <IcImage onDrop={props.onDrop} id="1" onPreview={props.onPreview} />
      </Col>
      <Col xs={6} md={3} lg={3}>
        <IcImage onDrop={props.onDrop} id="2" onPreview={props.onPreview} />
      </Col>
      <Col xs={6} md={3} lg={3}>
        <IcImage onDrop={props.onDrop} id="3" onPreview={props.onPreview} />
      </Col>
      <Col xs={6} md={3} lg={3}>
        <IcImage onDrop={props.onDrop} id="4" onPreview={props.onPreview} />
      </Col>
      <Col xs={6} md={3} lg={3}>
        <IcImage onDrop={props.onDrop} id="5" onPreview={props.onPreview} />
      </Col>
      <Col xs={6} md={3} lg={3}>
        <IcImage onDrop={props.onDrop} id="6" onPreview={props.onPreview} />
      </Col>
      <Col xs={6} md={3} lg={3}>
        <IcImage onDrop={props.onDrop} id="7" onPreview={props.onPreview} />
      </Col>
      <Col xs={6} md={3} lg={3}>
        <IcImage onDrop={props.onDrop} id="8" onPreview={props.onPreview} />
      </Col>
    </Row>
  )
}
