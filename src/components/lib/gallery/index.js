import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ImageGallery from 'react-image-gallery'

export default function IcImageGallery(props) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(props.show)
  }, [props.show])

  return (
    <div className="ic-gallery">
      {props.btn && (
        <Button className="btn-icon" onClick={props.handleShow}>
          <FontAwesomeIcon icon={props.icon} />
          {props.btnText}
        </Button>
      )}

      <Modal
        className="ic-gallery__modal"
        dialogClassName="ic-gallery__width"
        show={show}
        onHide={props.handleClose}
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
