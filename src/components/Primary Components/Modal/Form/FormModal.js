import React from 'react'
import { Modal } from "antd"
import "./FormModel.css"

export default function FormModal({ isModalVisible, handleOk, handleCancel, data }) {
    return (
        <div>
           <Modal title="Update Interviewer" className="InterviewerModal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
              saif
            </Modal>
        </div>
    )
}