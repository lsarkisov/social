import React from 'react'
import { useDispatch } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import IcImage from 'components/lib/img'
import { modelImageUpdate } from 'actions/model'

export default function ModelEditProfileProfile(props) {
  const dispatch = useDispatch()

  const onPreview = () => {}
  const onDrop = (data) => dispatch(modelImageUpdate(data))

  return (
    <Row className="profile">
      <Col sm={12} md={12} lg={7}>
        <Row className="edit-profile__thumbnails">
          <Col sm={12} md={12} lg={8} className="edit-profile__image">
            <IcImage
              drop={true}
              onDrop={onDrop}
              id="main"
              onPreview={onPreview}
            >
              <div className="thumbnails-text">
                Drag & drop or click here to brows
              </div>
            </IcImage>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
