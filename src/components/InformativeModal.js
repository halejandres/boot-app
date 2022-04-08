import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import React from 'react'

export const InformativeModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.headerText}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{props.messageText}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  )
}
