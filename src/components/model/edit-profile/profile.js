import React from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Row, Col } from 'react-bootstrap'
import IcImage from 'components/lib/img'
import { modelImageUpdate } from 'actions/model'

export default function ModelEditProfileProfile(props) {
  const { t } = useTranslation()

  const dispatch = useDispatch()

  const onPreview = () => {}
  const onDrop = (data) => dispatch(modelImageUpdate(data))

  return (
    <Row>
      <Col sm={12} md={12} lg={7}>
        <Row className="edit-profile__thumbnails">
          <Col sm={12} md={12} lg={5} className="edit-profile__image">
            <IcImage
              drop={true}
              onDrop={onDrop}
              id="main"
              onPreview={onPreview}
            >
              Drag & drop or click here to brows
            </IcImage>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
