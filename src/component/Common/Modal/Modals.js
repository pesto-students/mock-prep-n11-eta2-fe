import React from 'react'
import "./Modal.css"
import Modal from "react-bootstrap/Modal";
// import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap"
import { closeIcon } from 'constant/antIcons';

export default function Modals({title, show, onHide, data}) {
  
  
    return (
        <div>
              <Modal id="modal" centered show={show} >
                <Modal.Body id="body">
                    <div id="modalHeader">
                        <h5>{title}</h5>
                        <span  id="closeBtn" onClick={onHide}>{closeIcon}</span>
                    </div>
                  
                    <div>
                        {data}
                    </div>
                </Modal.Body>
             </Modal>
        </div>
    )
}