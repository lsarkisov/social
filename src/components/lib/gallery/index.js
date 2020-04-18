import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ImageGallery from 'react-image-gallery'

export default function IcImageGallery(props) {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div className="ic-gallery">
      <Button className="btn-icon" onClick={handleShow}>
        <FontAwesomeIcon icon={props.icon} />
        {props.btnText}
      </Button>

      <Modal
        className="ic-gallery__modal"
        dialogClassName="ic-gallery__width"
        show={show}
        onHide={handleClose}
      >
        {props.children}
        <ImageGallery
          showPlayButton={false}
          showFullscreenButton={false}
          items={props.images}
        />
      </Modal>
    </div>
  )
}
