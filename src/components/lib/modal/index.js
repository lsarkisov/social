import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { modelImageUpload } from 'actions/model'

export default function IcModal(props) {
  const [show, setShow] = useState(false)

  const { updateImage } = useSelector((state) => state.modelImageUpload)
  const dispatch = useDispatch()

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)
  const handleSave = () => {
    dispatch(modelImageUpload.request(updateImage))
    handleClose()
  }

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

        <div className="ic-modal__footer">
          <Button variant="secondary" onClick={handleClose}>
            cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            save
          </Button>
        </div>
      </Modal>
    </>
  )
}
