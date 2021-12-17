import React from 'react'
import { Modal } from "antd"
import "./Modal.css"

export default function Modals({title, isModalVisible, handleOk, handleCancel, data }) {
    
    return (
        <div>
            <Modal title={title } className="modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <section>
                    {data}
                </section>
            </Modal>
        </div>
    )
}