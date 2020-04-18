import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function IcModal(props) {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button className="btn-icon" onClick={handleShow}>
        <FontAwesomeIcon icon={props.icon} />
        {props.btnText}
      </Button>

      <Modal
        className="ic-modal"
        dialogClassName="ic-modal__width"
        show={show}
        onHide={handleClose}
      >
        {props.children}
        <Button variant="secondary" onClick={handleClose}>
          cancel
        </Button>
        <Button variant="primary" onClick={handleClose}>
          save
        </Button>
      </Modal>
    </>
  )
}
