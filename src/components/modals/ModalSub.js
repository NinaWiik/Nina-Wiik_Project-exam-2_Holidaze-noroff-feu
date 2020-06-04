import React from 'react'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function ModalSub(props) {

    return (
        <Modal className="modal__sub"
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <p className="modal__sub--header">Thanks for subscribing!</p>
          <p className="modal__sub--paragraph">
            We will now send you our super offers straight in your mailbox! 
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button className="modal__sub--button" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>

    );
  }
  

export default ModalSub
